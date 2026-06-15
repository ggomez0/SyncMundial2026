# SyncMundial 🏆⚽

**SyncMundial** es un sincronizador web premium diseñado para ver partidos del mundial y eventos deportivos con la mejor calidad de imagen posible (1080p bitrate alto / 4K) combinando el audio de relatores locales en español en segundo plano.

---

## 💡 Motivación

En Argentina y otros países de Latinoamérica, las transmisiones oficiales locales a menudo no ofrecen opciones en 4K o de alta definición real (1080p con bitrate alto). Las mejores transmisiones en video suelen provenir de señales extranjeras (como **CazéTV** en Brasil o **Fox Sports** en Estados Unidos) que emiten a altísima calidad de imagen.

Sin embargo, escuchar el partido en portugués o inglés no siempre es la mejor experiencia para el público local. **SyncMundial** resuelve este problema:
1. Permite cargar el stream de video de alta calidad extranjera (que arranca silenciado por defecto).
2. Permite cargar un stream de audio en español (de relatores argentinos como DSports, TyC Sports, etc.) de fondo.
3. Proporciona una herramienta interactiva para **sincronizar manualmente** ambos reproductores para que la imagen y el relato coincidan a la perfección.

---

## 🚀 Características Clave

* **Diseño Oscuro Premium**: Interfaz ultra-compacta, limpia y moderna (Dark Mode) sin elementos distractores.
* **Control de Canales Dinámico**: Dropdowns rápidos para alternar entre canales populares y cargador personalizado.
* **Botón Viceversa**: Intercambia el rol de video y audio con un solo clic.
* **Modo de Sincronización Manual**: Divide la pantalla al 50% para que puedas pausar y reproducir cada canal individualmente hasta sincronizar el momento exacto (por ejemplo, el pitazo inicial o un rebote).
* **Audio en Segundo Plano**: Al finalizar la sincronización, oculta el reproductor de audio para ver la transmisión de video a pantalla completa sin perder el sonido.

---

## 🛠️ Canales Incluidos de Fábrica

* **CazéTV** (Video 4K / Alta calidad)
* **DSports** (Audio relato local)
* **TyC Sports**
* **Fox Sports US**
* **SporTV**
* **Personalizado...** (permite ingresar cualquier URL de iframe que desees)

---

## 💻 Configuración Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/SyncMundial.git
   ```
2. Entra al directorio:
   ```bash
   cd SyncMundial
   ```
3. Instala y corre un servidor local (por ejemplo, usando `http-server` o `pnpm`):
   ```bash
   pnpm run dev
   ```
4. Abre [http://localhost:5000](http://localhost:5000) en tu navegador.

---

*Desarrollado para vivir el fútbol con la calidad visual que se merece, y con la pasión de nuestros relatos.* ⚽🇦🇷
