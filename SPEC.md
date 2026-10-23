# Logistica Transzoe SRL

## Descripcion del proyecto
Logística Transzoe S.R.L es una empresa de logística en Paraguay. Podes buscar toda la información que necesites vía internet. La idea es que hagamos una página web para la empresa con todos los datos necesarios para que los clientes puedan conocer más sobre la empresa y pueda contactarlos de manera sencilla.

## Tecnologias utilizadas
- La página debe ser realizada con la menor complejidad posible. Es decir, no creo que necesitemos un projecto en react para hacer todo esto
- Sí es necesario que sea fácilmente deployable así que todo lo que sea necesario para ese fin será bienvenido

## Requerimiento
- Página bien clara y simple
- Información clara
- Contacto de la empresa bien claro
- Ubicación del sito con mapa
- Página debe estar en español y portugues (BR)
- Página debe tener un botón al whatsapp de la empresa
- Página debe tener un formulario para que se contacten vía email

## Style
El estilo de la página debe de ser una elegante para una empresa de logística, que el estilo haga match con lo que la empresa realmente hace.

## Utilidades

- Perfil de Facebook: https://www.facebook.com/TranszoeParaguay/
- Perfil de Instagram: https://www.instagram.com/logisticatranszoe/
- Perfil de LinkedIn: https://py.linkedin.com/company/log%C3%ADsticatranszoe

## Decisiones tomadas

### Stack
- HTML + CSS estático, sin build. Deploy en Cloudflare Pages (`wrangler.toml` publica `site/`). Antes era Netlify; el cliente aprobó el cambio a Cloudflare.
- Formulario de contacto con Web3Forms (`https://api.web3forms.com/submit`), que reenvía cada mensaje a contabilidad@logisticatranszoe.com.py. La access key de Web3Forms va en el campo oculto `access_key` de ambas páginas.
- El formulario se envía en segundo plano (`site/assets/js/contact.js`) y un mensaje de confirmación reemplaza al formulario en la misma página (ES/PT). Si falla, se muestra un error y se puede reintentar. Anti-spam: campo oculto `botcheck`.

### Idiomas
- Una página por idioma: `/` (español, por defecto) y `/pt/` (portugués BR).
- Selector de idioma con banderas (SVG propias en `site/assets/img/flags/`, no emojis): Paraguay = español, Brasil = portugués. Solo banderas; el idioma actual en opacidad completa y subrayado plateado, el otro atenuado. El nombre del idioma va en `title` y `alt`.

### Estilo
- Propuesta "A": azul marino `#0B1A7A` / `#071052`, tipografías Barlow + Barlow Condensed, títulos en mayúsculas, franja tipo ruta discontinua.
- Sin amarillo/ámbar (rechazado por el cliente). Acento plateado `#C9CED9` con texto azul marino en botones; etiquetas de sección en `#556080`.

### Hero
- Foto `site/assets/img/trucks.jpg`: tres camiones Scania con la marca Transzoe, del post de Instagram del 2 de julio de 2025 (https://www.instagram.com/p/DLm_WfmgbwF/). Tiene el logo arriba y un texto en español abajo; se recorta con CSS (proporción 2:1) para mostrar solo los camiones, así la página PT no muestra texto en español.
- Se descartó `truck.jpg` (foto nocturna cuadrada): al recortar el eslogan quedaban cortadas las ruedas.
- La copia de Instagram es de baja resolución (640×452). Conviene pedirle al cliente el archivo original.

### Formulario
- Sin autocompletado del navegador: `autocomplete="off"` en el formulario y en cada campo.

## Datos de la empresa

- Razón social: Logística Transzoe S.R.L. — desde 2010.
- WhatsApp: +595 983 901 170 (`https://wa.me/595983901170`).
- Email: contabilidad@logisticatranszoe.com.py
- Dirección: 4ta Proyectada casi Parapiti, Limpio, Departamento Central, Paraguay.
- Google Maps: https://maps.app.goo.gl/CZcwULDbbG7fk2L8A — ficha "Logística i TransZoe", coordenadas `-25.1617711, -57.4717932` (el mapa embebido usa estas coordenadas).

## Pendiente

- Access key de Web3Forms (reemplazar `[WEB3FORMS_ACCESS_KEY]` en ambas páginas).
- Original en alta resolución de `trucks.jpg`.
- Descripciones de los servicios "Representaciones" y "Seguridad".
