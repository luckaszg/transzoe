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
- Formulario de contacto con Web3Forms (`https://api.web3forms.com/submit`), que reenvía cada mensaje a transporte@logisticatranszoe.com.py. La access key de Web3Forms va en el campo oculto `access_key` de ambas páginas.
- El formulario se envía en segundo plano (`site/assets/js/contact.js`) y un mensaje de confirmación reemplaza al formulario en la misma página (ES/PT). Si falla, se muestra un error y se puede reintentar. Anti-spam: campo oculto `botcheck`.

### Idiomas
- Una página por idioma: `/` (español, por defecto) y `/pt/` (portugués BR).
- Selector de idioma con banderas (SVG propias en `site/assets/img/flags/`, no emojis): Paraguay = español, Brasil = portugués. Cada botón muestra bandera + nombre del idioma ("Español", "Português"); el idioma actual en opacidad completa y subrayado plateado, el otro atenuado. La bandera tiene `alt=""` porque el nombre ya está como texto.

### Estilo
- Texto del logo en el encabezado: "Logística Transzoe S.R.L." (con puntos, igual que la razón social del pie).
- Propuesta "A": azul marino `#0B1A7A` / `#071052`, tipografías Barlow + Barlow Condensed, títulos en mayúsculas, franja tipo ruta discontinua.
- Sin amarillo/ámbar (rechazado por el cliente). Acento plateado `#C9CED9` con texto azul marino en botones; etiquetas de sección en `#556080`.

### Hero
- Foto `site/assets/img/truck.jpg`: tres camiones Scania con la marca Transzoe al atardecer, sin texto encima. Se generó desde `truck.PNG` (2048×1152, 5,4 MB) como JPG de 1600×900 (~445 KB); se muestra completa en 16:9, sin recorte. Reemplaza a la foto de Instagram anterior (`trucks.jpg`).
- Texto: "Logística nacional e internacional de cargas, desde Limpio, Paraguay." (sin "por camión").

### Antigüedad
- No mostrar el año de fundación: se usa "16 años de experiencia transportando y conectando países" (etiqueta del hero, texto y dato de "Nosotros"). El número está escrito a mano: actualizarlo cada año.

### Servicios (textos del cliente)
- Transporte nacional: "Transportamos tu carga dentro de Paraguay con flota propia y seguimiento GPS. Coordinamos cada traslado según el tipo de mercadería, origen y destino."
- Transporte internacional: "Conectamos Paraguay con Argentina, Chile, Bolivia y Uruguay. Transportamos carga seca, granos y mercadería paletizada, con consolidados semanales desde Argentina."
- Representaciones: "Actuamos como agente de carga y acompañamos la gestión de permisos y documentación necesarios para operaciones de importación y exportación, coordinando cada trámite según el tipo de mercadería y los requisitos aplicables."
- Seguridad: "Monitoreamos nuestras unidades mediante GPS en tiempo real para mantener el control del recorrido. Contamos con permisos y habilitaciones para el transporte de mercaderías peligrosas, según los requisitos de cada operación."

### Formulario
- Es un pedido de cotización. Título de la sección: "Contanos qué necesitás transportar y te preparamos una cotización." (completo, pedido del cliente).
- Campos: Nombre, Empresa, WhatsApp, Origen, Destino (separados), Tipo de carga (texto libre), Peso o volumen aproximado, Fecha estimada (selector de fecha). Sin email: el cliente no lo pidió; se responde por WhatsApp.
- Los atributos `name` de los campos están en español en ambas páginas, para que todos los emails lleguen con las mismas etiquetas.
- Sin autocompletado del navegador: `autocomplete="off"` en el formulario y en cada campo.

## Datos de la empresa

- Razón social: Logística Transzoe S.R.L. — desde 2010.
- WhatsApp: +595 983 901 170 (`https://wa.me/595983901170`).
- Email: transporte@logisticatranszoe.com.py
- Dirección: 4ta Proyectada casi Parapiti, Limpio, Departamento Central, Paraguay.
- Google Maps: https://maps.app.goo.gl/CZcwULDbbG7fk2L8A — ficha "Logística i TransZoe", coordenadas `-25.1617711, -57.4717932` (el mapa embebido usa estas coordenadas).

## Pendiente

- Access key de Web3Forms (reemplazar `[WEB3FORMS_ACCESS_KEY]` en ambas páginas).
