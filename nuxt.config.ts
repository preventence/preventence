// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/scripts', '@nuxt/ui',  '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-fonts',],
  postcss: {
     plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  site: {
    url: "https://preventence.com",
    name: 'Preventence',
    description:
      'Preventence is an intelligent preventive maintenance platform that reduces downtime and improves asset reliability.',
    defaultLocale: 'en',
  },
  sitemap: {
    autoLastmod: true,
    xsl: false,
    exclude: ['/admin/**'],
  },
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700],
      'Open+Sans': true,
    },
    display: 'swap',
    prefetch: true,
  },
   app: {
    head: {
      title: 'Preventence | Smart Preventive Maintenance Platform',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Preventence is an intelligent preventive maintenance platform that reduces equipment downtime, improves asset reliability, and increases productivity across industries.',
        },
        // Open Graph (Social Sharing)
        { property: 'og:title', content: 'Preventence | Intelligent Preventive Maintenance Platform' },
        { property: 'og:description', content: 'Reduce downtime, automate maintenance, and improve asset life with Preventence.' },
        { property: 'og:image', content: '/Preventence-Transparent-logo.png' },
        { property: 'og:url', content: 'https://preventence.com' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Preventence | Smart Maintenance Platform' },
        { name: 'twitter:description', content: 'Automate, monitor, and optimize maintenance workflows seamlessly.' },
        { name: 'twitter:image', content: '/Preventence-Transparent-logo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Preventence-Transparent-logo.png' },
        { rel: 'canonical', href: 'https://preventence.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/preventence-touch-icon.png' // Create this separate file!
        }
      ],
    }
  }
})