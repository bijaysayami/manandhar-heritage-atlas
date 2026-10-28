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

- Keep the public site static: no subscription mutations or database reads; registration stays visibly unavailable until a real destination is approved.
- Share locale state through LanguageProvider and translated copy through useLanguage; initialize English for matching SSR and hydrate stored preferences afterward.
- Keep shared informational pages in ArchivePage with one leaf route per navigation destination; retain existing archive URLs.
- Cultural sketches are decorative illustrations, never verified community records; use researched motifs and defer uncertain objects until references are provided.
