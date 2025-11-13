<template>
  <div>
    <Hero @openDemo="openDemo = true" />

    <!-- Features -->
    <!-- <Features /> -->
      <section class="py-20 -mt-10 relative z-10">
      <div class="container mx-auto px-6 md:px-12">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Designed for modern maintenance teams</h2>
          <p class="text-slate-600 max-w-3xl mx-auto mt-3">Comprehensive capabilities grouped into four pillars — clear, powerful, and easy to adopt.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection v-for="(p, i) in pillars" :key="p.title">
            <FeaturePillar
              :icon="p.icon"
              :title="p.title"
              :desc="p.desc"
              :bullets="p.bullets"
              :delay="i*80"
              fromColor="#1297E0"
              toColor="#07416B"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
    <!-- <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#07416B] mb-6">Powerful features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-xl border">
            <h3 class="font-semibold mb-2">Automated Scheduling</h3>
            <p class="text-sm text-slate-600">Create plans, automations and recurring tasks with ease.</p>
          </div>
          <div class="p-6 rounded-xl border">
            <h3 class="font-semibold mb-2">Smart Checklists</h3>
            <p class="text-sm text-slate-600">Standardized inspections with rich input types.</p>
          </div>
          <div class="p-6 rounded-xl border">
            <h3 class="font-semibold mb-2">Reports & Dashboards</h3>
            <p class="text-sm text-slate-600">Live KPIs, scheduled reports, and user accountability logs.</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Industries -->
    <Industries />
    <!-- <section id="industries" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#07416B] mb-6">Industries</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="p-6 rounded-xl bg-white shadow">Manufacturing</div>
          <div class="p-6 rounded-xl bg-white shadow">Warehousing</div>
          <div class="p-6 rounded-xl bg-white shadow">Energy</div>
          <div class="p-6 rounded-xl bg-white shadow">Service Providers</div>
        </div>
      </div>
    </section> -->

    <!-- ROI -->
    <!-- <section id="roi" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#07416B] mb-6">ROI Calculator</h2>
        <ROICalculator />
      </div>
    </section> -->

    <ROICalculator @openDemo="openDemo = true" />
    <!-- CTA -->
    <FooterCTA @openDemo="openDemo = true" />
    <!-- <section id="contact" class="py-20 bg-gradient-to-br from-[#1297E0] to-[#07416B] text-white">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to reduce downtime?</h2>
        <p class="mb-6">Book a demo with our team and get a free ROI assessment.</p>
        <button @click="openDemo = true" class="bg-white text-[#07416B] px-6 py-3 rounded-lg hover:bg-white/90">Book a Demo</button>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import Features from '~/components/Features.vue'
import AnimatedSection from '~/components/AnimatedSection.vue'
import FeaturePillar from '~/components/FeaturePillar.vue'
import Industries from '~/components/Industries.vue'
import ROICalculator from '~/components/ROICalculator.vue'
import FooterCTA from '~/components/FooterCTA.vue'
import { Settings, Factory, BarChart2, Cloud } from 'lucide-vue-next'
import { ref } from 'vue'
import { useHead } from '#imports'

const openDemo = ref(false)

useHead({
  title: "Preventence — Modern Maintenance Management Software",
  meta: [
    {
      name: "description",
      content:
        "Preventence is a modern maintenance management software that helps industrial teams automate workflows, track assets in real time, and extend equipment life with intelligent scheduling and analytics."
    },
    {
      name: "keywords",
      content:
        "maintenance management software, CMMS, preventive maintenance, asset tracking, industrial maintenance, downtime reduction, maintenance automation, maintenance analytics"
    },

    // OpenGraph
    { property: "og:title", content: "Preventence — Modern Maintenance Management Software" },
    {
      property: "og:description",
      content:
        "Automate maintenance workflows, track assets in real time, and improve equipment reliability with Preventence."
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://preventence.com/" },
    { property: "og:image", content: "/og-banner.png" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Preventence — Maintenance Software" },
    {
      name: "twitter:description",
      content:
        "Preventence helps industrial teams reduce downtime and extend asset life with automation, tracking, and analytics."
    },
    { name: "twitter:image", content: "/og-banner.png" },
  ],

  link: [
    { rel: "canonical", href: "https://preventence.com/" }
  ],

  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Preventence",
        applicationCategory: "Industrial Maintenance Software",
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        description:
          "Preventence is a modern maintenance management software that automates workflows, tracks assets in real time, and improves equipment reliability with intelligent scheduling and analytics.",
        url: "https://preventence.com/",
        image: "https://preventence.com/og-banner.png",
        creator: {
          "@type": "Organization",
          name: "Preventence",
          url: "https://preventence.com"
        }
      })
    }
  ]
})

const pillars = [
  {
    icon: Settings,
    title: 'Maintenance Automation',
    desc: 'Automate work orders, schedules, and checklists to prevent breakdowns before they occur.',
    bullets: ['Work orders & priorities', 'Recurring preventive plans', 'Digital checklists & SOPs']
  },
  {
    icon: Factory,
    title: 'Asset & Inventory',
    desc: 'Keep a single source of truth for assets and spare parts with lifecycle and stock controls.',
    bullets: ['Asset registry & hierarchy', 'Parts & inventory', 'Expiration & warranty alerts']
  },
  {
    icon: BarChart2,
    title: 'Analytics & Insights',
    desc: 'Live dashboards and historical reports to help you reduce MTTR and increase OEE.',
    bullets: ['Live dashboards', 'Custom reports', 'Historical trends']
  },
  {
    icon: Cloud,
    title: 'Integrations & Scheduling',
    desc: 'Connect to ERPs and SAP, and use smart scheduling to optimize resources.',
    bullets: ['ERP / SAP integrations', 'Smart scheduling', 'APIs & webhooks']
  },
]
</script>
