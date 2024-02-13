import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({registerType: 'autoUpdate', devOptions: {enabled: true}, manifest: {
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
        src: "/src/assets/logo.png",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  }})],
})
