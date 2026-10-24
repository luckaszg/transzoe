# Logística Transzoe S.R.L. — website

Corporate website for **Logística Transzoe S.R.L.**, a road freight company based in Limpio, Paraguay (since 2010), offering national and international cargo transport.

The site presents the company and its services and makes it easy to get in touch: WhatsApp button, contact form, email, address and a location map. It's available in Spanish and Portuguese (BR).

It's a static site (plain HTML + CSS + a small script, no framework, no build step) hosted on Cloudflare Pages. The contact form is delivered by email through [Web3Forms](https://web3forms.com).

## Structure

```
site/                     published folder
  index.html              Spanish (default)
  pt/index.html           Portuguese (BR)
  assets/css/styles.css   shared stylesheet
  assets/img/logo.jpg, truck.jpg
  assets/img/flags/       language switcher flags (py.svg, br.svg)
  assets/js/contact.js    sends the contact form in the background, shows the result inline
  assets/js/nav.js        opens/closes the mobile (hamburger) menu
wrangler.toml             Cloudflare Pages config (publishes site/)
start.sh                  local preview server
SPEC.md                   requirements, approved decisions, company data
AGENTS.md                 instructions for AI coding agents
```

Both language pages share the same stylesheet. When changing content, update both `index.html` and `pt/index.html`.

## Run locally

```sh
./start.sh --port 5432
```

Then open http://localhost:5432 (Spanish) or http://localhost:5432/pt/ (Portuguese). Without `--port` it uses 8000. Requires `python3`.

The contact form works locally too once the Web3Forms access key is set (see below); each test sends a real email.

## Deploy (Cloudflare Pages)

From Git (recommended, redeploys on every push):

1. Push the repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, pick the repo. Framework preset: none. Build command: empty. Build output directory: `site`.
3. Custom domain: project → **Custom domains → Set up a custom domain** → `logisticatranszoe.com.py` (and `www.`). Cloudflare issues the HTTPS certificate automatically.

Without Git: `npx wrangler pages deploy` (reads `wrangler.toml`).

> **Email warning:** connecting the domain may move its DNS to Cloudflare. See [Contact form email setup](#contact-form-email-setup) step 4 before doing it.

## Pending content

Search for `TODO` in `site/` — currently:

- Web3Forms access key.

## Contact form email setup

The contact form is sent through [Web3Forms](https://web3forms.com), which emails each message to `contabilidad@logisticatranszoe.com.py`. The script `site/assets/js/contact.js` submits it in the background and shows the confirmation (or an error) in place of the form.

1. **Create the access key.** On https://web3forms.com, enter `contabilidad@logisticatranszoe.com.py` and confirm from that inbox. Messages always go to the email the key was created with.
2. **Paste the key.** Replace `[WEB3FORMS_ACCESS_KEY]` in `site/index.html` and `site/pt/index.html`. The key is designed to be public, so it is safe in the page.
3. **Check the inbox works.** Send a normal email to `contabilidad@logisticatranszoe.com.py` from another account. If it doesn't arrive, the form can't deliver either.
4. **Keep the email DNS records.** If connecting `logisticatranszoe.com.py` in Cloudflare moves the domain's DNS to Cloudflare, copy the existing **MX** and **TXT** (SPF/DKIM/DMARC) records exactly as they are. Missing or wrong records stop *all* mail to the company address, not just the form's.
5. **Test after deploying.** Send a test message from the live site in each language and check the inbox, including spam. If it lands in spam, mark the Web3Forms sender as safe.
6. **Mind the limit.** The free plan allows about 250 messages a month.

Messages arrive with the subject "Nuevo mensaje desde el sitio web (ES)" or "Nova mensagem pelo site (PT)"; replying answers the visitor directly. Testing from `./start.sh` also works once the key is set, and each test sends a real email.
