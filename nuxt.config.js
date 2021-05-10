export default {
  ssr:true,
  head: {
    title: 'حساب زكاة الإبل',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'theme-color', content: '#4927d0' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'حساب زكاة الابل' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://f.top4top.io/p_19429jgz00.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://f.top4top.io/p_19429jgz00.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'حساب زكاة الإبل'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://f.top4top.io/p_19429jgz00.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'حساب زكاة الإبل'
    },
    meta: {
      name: 'حساب زكاة الإبل',
      description: 'يمكنك حساب زكاة رؤس الإبل الخاصة بك بسهول وبتصميم عصري وسهل',
      theme_color: '#34495e',
      lang: 'ar',
      nativeUI: true,
    },
    workbox: {
      offline: true
  }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
