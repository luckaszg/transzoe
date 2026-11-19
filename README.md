<h1 align="center">Oficial Logística Transzoe S.R.L. Landing Page</h1>

<p align="center"><b>English</b> | <a href="README.es.md">Español</a></p>

This repository holds the official landing page of **Logística Transzoe S.R.L.**, a road freight company based in Limpio, Paraguay (since 2010), offering national and international cargo transport.

Visit the live site: **[https://www.logisticatranszoe.com.py](https://www.logisticatranszoe.com.py)**

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
