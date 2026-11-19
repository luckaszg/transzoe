<h1 align="center">Landing Page Oficial de Logística Transzoe S.R.L.</h1>

<p align="center"><a href="README.md">English</a> | <b>Español</b></p>

Este repositorio contiene la página oficial de **Logística Transzoe S.R.L.**, empresa de transporte de cargas por carretera con base en Limpio, Paraguay (desde 2010), que ofrece transporte nacional e internacional de cargas.

Visitá el sitio: **[https://www.logisticatranszoe.com.py](https://www.logisticatranszoe.com.py)**

El sitio presenta la empresa y sus servicios y facilita el contacto: botón de WhatsApp, formulario de contacto, email, dirección y mapa de ubicación. Está disponible en español y portugués (BR).

Es un sitio estático (HTML + CSS + un script pequeño, sin framework ni paso de build) alojado en Cloudflare Pages. El formulario de contacto se envía por email a través de [Web3Forms](https://web3forms.com).

## Estructura

```
site/                     carpeta publicada
  index.html              español (por defecto)
  pt/index.html           portugués (BR)
  assets/css/styles.css   hoja de estilos compartida
  assets/img/logo.jpg, truck.jpg
  assets/img/flags/       banderas del selector de idioma (py.svg, br.svg)
  assets/js/contact.js    envía el formulario en segundo plano y muestra el resultado en la página
  assets/js/nav.js        abre/cierra el menú móvil (hamburguesa)
wrangler.toml             configuración de Cloudflare Pages (publica site/)
start.sh                  servidor local de vista previa
SPEC.md                   requerimientos, decisiones aprobadas, datos de la empresa
AGENTS.md                 instrucciones para agentes de IA
```

Las dos páginas de idioma comparten la misma hoja de estilos. Al cambiar contenido, actualizá tanto `index.html` como `pt/index.html`.
