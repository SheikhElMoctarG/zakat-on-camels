import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    devOptions: { enabled: true }, registerType: 'autoUpdate', manifest: {
      name: "زكاة الإبل",
      short_name: "زكاة الابل",
      description: "تطبيق ويب لحساب زكاة الابل",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#27ae60",
      lang: 'ar',
      icons: [
        {
          src: "android-launchericon-48-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "android-launchericon-72-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "android-launchericon-96-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "android-launchericon-144-144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "android-launchericon-192-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "android-launchericon-512-512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }
  })],
})
