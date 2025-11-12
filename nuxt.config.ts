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
        { property: 'og:image', content: '/Preventence.png' },
        { property: 'og:url', content: 'https://preventence.com' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Preventence | Smart Maintenance Platform' },
        { name: 'twitter:description', content: 'Automate, monitor, and optimize maintenance workflows seamlessly.' },
        { name: 'twitter:image', content: '/Preventence.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Preventence.png' },
        { rel: 'canonical', href: 'https://preventence.com' },
      ],
    }
  }
})