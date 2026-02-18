📱 Investigación Técnica: Pilares de una Progressive Web App (PWA)
📌 Web App Manifest (manifest.json)

El Web App Manifest es un archivo en formato JSON que permite definir la apariencia y comportamiento de una aplicación web cuando se instala en el dispositivo del usuario. Es un elemento clave para que una aplicación sea considerada como una PWA.

Propiedades principales:

theme_color
Define el color principal de la interfaz de la aplicación, especialmente en la barra superior del navegador o sistema operativo. Mejora la identidad visual y la integración con el sistema.

background_color
Establece el color de fondo que se muestra mientras la aplicación se está cargando. Esto permite ofrecer una experiencia visual coherente durante el arranque.

display
Controla el modo de visualización de la aplicación:

standalone: la aplicación se comporta como una app nativa, sin barra de navegación del navegador.

browser: la aplicación se abre como una página web tradicional dentro del navegador.

icons
Es un arreglo que contiene diferentes versiones del ícono de la aplicación en distintos tamaños y resoluciones. Es importante porque:

Permite que la app se vea correctamente en diferentes dispositivos.

Es utilizado al momento de instalar la aplicación en la pantalla de inicio.

⚙️ Service Workers

Los Service Workers son scripts que se ejecutan en segundo plano en el navegador, separados de la página web, y permiten funcionalidades como el funcionamiento offline, notificaciones push y manejo de caché.

Proceso de registro:

El Service Worker se registra desde el archivo principal de la aplicación con código similar a:

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

Ciclo de vida:

Installation (Instalación)
Se descarga el archivo del Service Worker y se almacenan los recursos necesarios en caché.

Activation (Activación)
El Service Worker se activa y toma control de las páginas abiertas. También limpia cachés antiguos si es necesario.

Fetching (Intercepción de peticiones)
Intercepta las solicitudes de red realizadas por la aplicación y decide si responder con datos en caché o solicitar al servidor.

Funcionamiento como proxy de red:

El Service Worker actúa como un proxy intermediario entre la aplicación web y la red, interceptando las solicitudes HTTP y decidiendo:

Responder con recursos almacenados en caché.

Realizar una solicitud a la red.

Combinar ambas estrategias.

Esto permite mejorar rendimiento, velocidad de carga y funcionamiento sin conexión.

💾 Estrategias de Almacenamiento (Caching)

Las PWA utilizan distintas estrategias de caché dependiendo de la necesidad de la aplicación.

🔁 Stale-While-Revalidate

Devuelve el recurso desde la caché inmediatamente.

En segundo plano, actualiza el recurso desde la red.

Ideal para contenido que puede actualizarse, como listas o noticias.

Ventaja: velocidad inmediata + actualización en segundo plano.

⚡ Cache First

Busca primero en la caché.

Si no existe, realiza la solicitud a la red.

Ideal para recursos estáticos como imágenes, CSS o JS.

Ventaja: máxima velocidad y ahorro de datos.

🌐 Network First

Intenta obtener la información desde la red.

Si falla (sin conexión), utiliza la caché.

Ventaja: siempre intenta mostrar datos actualizados.

📊 Comparativa técnica
Estrategia	Prioridad	Uso ideal	Ventaja principal
Cache First	Caché	Archivos estáticos	Carga rápida
Network First	Red	Datos dinámicos	Información actualizada
Stale-While-Revalidate	Mixto	Contenido parcialmente dinámico	Balance entre rapidez y frescura
🔐 Seguridad y TLS (HTTPS)
¿Por qué HTTPS es obligatorio?

Los Service Workers solo funcionan en entornos seguros (HTTPS) porque:

Interceptan el tráfico de red.

Pueden modificar las respuestas.

Tienen acceso a recursos críticos del navegador.

HTTPS garantiza:

Cifrado de la información.

Integridad de los datos.

Autenticación del servidor.

Esto previene ataques como el Man-in-the-Middle (MITM).

Impacto en el "Install Prompt"

El navegador solo permite mostrar el mensaje de instalación (Install Prompt) cuando:

La aplicación está servida mediante HTTPS.

Tiene un Web App Manifest válido.

Tiene un Service Worker activo.

Si no se cuenta con certificado TLS válido:

El navegador bloquea la instalación.

La aplicación no puede ser considerada una PWA.

✅ Conclusión

Los pilares técnicos de una Progressive Web App —Web App Manifest, Service Workers, estrategias de caché y seguridad HTTPS— trabajan en conjunto para ofrecer una experiencia similar a una aplicación nativa, garantizando rendimiento, disponibilidad offline, seguridad y una interfaz integrada al dispositivo.