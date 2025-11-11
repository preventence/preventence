// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/scripts', '@nuxt/ui'],
  postcss: {
     plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Preventence — Preventive Maintenance',
      meta: [
        { name: 'description', content: 'Preventence — reduce downtime, extend asset life.' }
      ]
    }
  }
})