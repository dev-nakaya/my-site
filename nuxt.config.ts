// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    microcmsUrl: '',
    microcmsKey: ''
  },
  srcDir: 'src/',
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    editorSupport: true
  },
  typescript: {
    strict: true
  }
})
