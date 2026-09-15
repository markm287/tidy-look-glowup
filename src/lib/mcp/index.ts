import { defineMcp } from "@lovable.dev/mcp-js";
import getPracticeInfo from "./tools/get-practice-info";
import listTreatments from "./tools/list-treatments";
import searchTreatments from "./tools/search-treatments";

export default defineMcp({
  name: "radiance-website",
  title: "Radiance Website",
  version: "0.1.0",
  instructions:
    "Public information tools for Radiance Med Spa in Chambersburg, PA. Use `get_practice_info` for address, phone, hours, booking status, and VIP tiers; `list_treatments` for the full treatment and pricing menu by section; `search_treatments` to find a specific service by keyword. All pricing is the practice's published pricing; a provider consultation is required before any treatment.",
  tools: [getPracticeInfo, listTreatments, searchTreatments],
});
