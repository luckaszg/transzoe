- Before doing some UI thing, propose solutions and let the user choose which one
- Before adding a requirement ask if it's needed or not
- When you're in doubt because the description is not clear enough, ask, never assume

## Project conventions

- Read `SPEC.md` first: requirements, decisions already approved by the client, and company data live there. Don't re-ask about decided things; record new decisions there.
- Every content or markup change must be applied to both `site/index.html` (ES) and `site/pt/index.html` (PT-BR).
- Use inline/SVG image files for icons and flags, never emoji flags (Windows shows them as letters).
- Company data (email, address, WhatsApp, map coordinates) comes from the client; never invent it. Leave a `TODO` comment plus a visible `[placeholder]` when something is unknown.
- Map embed: use the coordinates from `SPEC.md`, not a town-level search.
- Hosting is Cloudflare Pages and the form goes through Web3Forms; nothing Netlify-specific (`data-netlify`, `netlify.toml`) should come back.
- Form texts for the inline status live in the form's `data-sending` / `data-success` / `data-error` attributes, one set per language page; `contact.js` is shared.
- No headless browser is installed; visual checks are done by the user with `./start.sh`.
- The preview server (`python3 -m http.server`) doesn't send no-cache headers, so browsers may show stale CSS/HTML. If the user doesn't see a change, first check that the server returns the new file (`curl`), then ask for a hard reload (Ctrl+Shift+R) or DevTools "Disable cache".
- Every layout change must work on phones. Breakpoints live at the end of `styles.css` (header ≤ 860px, small screens ≤ 640px, phones ≤ 480px). Flex items with a large `flex-basis` need `min-width: 0`, or they push the page wider than the screen.
