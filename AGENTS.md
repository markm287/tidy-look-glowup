<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep `public/ai/*.html` synchronized by running `python3 scripts/generate-readable-pages.py` after editing `public/radiance.html`; these static pages expose iframe and hidden-tab copy to crawlers without changing the visual site.
- Resolve transitive security updates through the text `bun.lock` without package.json overrides; this preserves upstream compatibility constraints and makes unresolved pins visible to the dependency scanner.
