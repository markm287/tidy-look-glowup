import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const asset = JSON.parse(readFileSync("src/assets/radiance-soft-launch-menu-v21.pdf.asset.json", "utf8")) as { url: string };

// Execute each actual handler body with a controlled fetch implementation.
function loadHandler(route: string, fetchMock: typeof fetch) {
  const source = readFileSync(`src/routes/${route}.ts`, "utf8");
  const body = source.match(/GET: async \(\) => \{([\s\S]*?)\n      \},/)?.[1];
  if (!body) throw new Error("Menu handler was not found");
  return new Function("asset", "FILENAME", "fetch", `return async function() {${body}}`)(
    asset, "radiance-soft-launch-menu.pdf", fetchMock,
  ) as (input?: { request: Request }) => Promise<Response>;
}

for (const route of ["softlaunch", "softopening"]) {
  describe(route, () => {
    test("host and forwarded headers cannot choose the fetch destination", async () => {
      const calls: Array<{ url: string; options: RequestInit | undefined }> = [];
      const fetchMock = (async (input: RequestInfo | URL, options?: RequestInit) => {
        calls.push({ url: String(input), options });
        return new Response("%PDF-1.7", { headers: { "content-type": "application/pdf" } });
      }) as typeof fetch;
      const handler = loadHandler(route, fetchMock);
      for (const origin of ["https://attacker.example", "http://127.0.0.1", "http://169.254.169.254"]) {
        const response = await handler({ request: new Request(`${origin}/${route}`, {
          headers: { "x-forwarded-host": "attacker.example", "x-forwarded-proto": "http" },
        }) });
        expect(response.status).toBe(200);
        expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow, noarchive");
        expect(await response.text()).toBe("%PDF-1.7");
      }
      expect(calls).toHaveLength(3);
      for (const call of calls) {
        expect(call.url).toBe(`https://radiancepa.com${asset.url}`);
        expect(call.options?.redirect).toBe("error");
      }
    });

    test("fetch failure falls back only to the fixed menu asset", async () => {
      const fetchMock = (async () => { throw new TypeError("Redirect rejected"); }) as typeof fetch;
      const response = await loadHandler(route, fetchMock)();
      expect(response.status).toBe(302);
      expect(response.headers.get("Location")).toBe(asset.url);
      expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow, noarchive");
    });
  });
}