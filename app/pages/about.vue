<template>
  <div class="bg-white text-slate-800">

    <!-- ======================
    HERO SECTION
    ======================= -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-[#07416B] via-[#0B3A5A] to-[#1297E0] text-white py-24"
    >
      <div class="container mx-auto px-6 md:px-12 text-center relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          About Preventence
        </h1>
        <p class="max-w-3xl mx-auto text-blue-100 text-lg leading-relaxed">
          Empowering industrial teams with intelligent maintenance
          automation, real-time asset insights, and world-class reliability.
        </p>
      </div>

      <div
        class="absolute inset-0 opacity-[0.08] pointer-events-none"
        style="
          background-image: radial-gradient(circle at center, white 5%, transparent 60%);
        "
      ></div>
    </section>

    <!-- ======================
    OUR STORY
    ======================= -->
    <section class="py-20">
      <div class="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 class="text-3xl font-bold text-[#07416B] mb-4">Our Mission</h2>
          <p class="text-slate-600 leading-relaxed text-lg">
            Preventence was created with one clear purpose — to help industries reduce
            unplanned downtime, improve asset reliability, and bring complete visibility to
            maintenance operations. Traditional maintenance systems are outdated, complex,
            and disconnected. We’re changing that with a modern, intuitive, and intelligent
            maintenance software platform.
          </p>
        </div>

        <div>
          <img
            src="/about-industrial.png"
            alt="Preventence Industrial Maintenance"
            class="rounded-xl shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>

    <!-- ======================
    WHAT WE DO
    ======================= -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 md:px-12 text-center">
        <h2 class="text-3xl font-bold text-[#07416B] mb-6">What We Do</h2>
        <p class="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-12">
          Preventence combines automation, analytics, and asset intelligence to help
          maintenance teams work smarter. Our platform simplifies work order management,
          preventive schedules, asset tracking, and real-time monitoring — all from one
          unified system.
        </p>

        <div class="grid md:grid-cols-3 gap-10">

          <div class="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div class="text-[#1297E0] text-4xl mb-4">⚙️</div>
            <h3 class="text-xl font-semibold mb-2">Maintenance Automation</h3>
            <p class="text-slate-600">
              Automated scheduling, digital checklists, and task workflows that keep your
              operations running smoothly.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div class="text-[#1297E0] text-4xl mb-4">📊</div>
            <h3 class="text-xl font-semibold mb-2">Asset Insights</h3>
            <p class="text-slate-600">
              Real-time visibility into asset health, performance, and maintenance history.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div class="text-[#1297E0] text-4xl mb-4">🔧</div>
            <h3 class="text-xl font-semibold mb-2">Smart Reliability Tools</h3>
            <p class="text-slate-600">
              Dashboards, analytics, and data intelligence to improve reliability and reduce
              failures.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- ======================
    VALUES SECTION
    ======================= -->
    <section class="py-20">
      <div class="container mx-auto px-6 md:px-12">
        <h2 class="text-3xl font-bold text-[#07416B] mb-12 text-center">
          Our Core Values
        </h2>

        <div class="grid md:grid-cols-3 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-[#1297E0] mb-3">Innovation</h3>
            <p class="text-slate-600 leading-relaxed">
              We build modern tools that evolve with industry needs — intuitive, fast,
              and built for the future.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-[#1297E0] mb-3">Reliability</h3>
            <p class="text-slate-600 leading-relaxed">
              Just like the machinery we help protect, we believe software should be
              dependable at every moment.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-[#1297E0] mb-3">Empowerment</h3>
            <p class="text-slate-600 leading-relaxed">
              We help maintenance teams do more with less — through automation, clarity,
              and real-time insights.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================
    CTA SECTION
    ======================= -->
    <section class="py-20 bg-gradient-to-br from-[#07416B] to-[#1297E0] text-white text-center">
      <div class="container mx-auto px-6 md:px-12">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Transform Your Maintenance?
        </h2>
        <p class="text-blue-100 max-w-2xl mx-auto mb-8">
          Join industrial teams who trust Preventence to reduce downtime and extend
          equipment life.
        </p>

        <button
          @click="openDemo = true"
          class="inline-block bg-white text-[#07416B] px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition"
        >
          Book a Demo
        </button>
      </div>
    </section>
    <DemoModal v-model:show="openDemo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#imports'
import DemoModal from '~/components/DemoModal.vue'

const openDemo = ref(false)

useHead({
  title: "About Us — Preventence Maintenance Management Software",
  meta: [
    {
      name: "description",
      content:
        "Learn about Preventence, the modern maintenance management software built to help industries automate workflows, reduce downtime, track assets in real time, and improve equipment reliability."
    },
    {
      name: "keywords",
      content:
        "about preventence, maintenance software, CMMS, preventive maintenance, industrial maintenance, asset tracking, downtime reduction"
    },

    // OpenGraph
    { property: "og:title", content: "About Preventence — Maintenance Software" },
    {
      property: "og:description",
      content:
        "Preventence helps industrial teams automate maintenance workflows, track assets in real time, and boost reliability with intelligent tools."
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://preventence.com/about" },
    { property: "og:image", content: "/og-banner.png" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About Preventence" },
    {
      name: "twitter:description",
      content:
        "Modern maintenance software built for industrial reliability and automation."
    },
    { name: "twitter:image", content: "/og-banner.png" }
  ],
  link: [
    { rel: "canonical", href: "https://preventence.com/about" }
  ],

  // JSON-LD Schema
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Preventence Technology Private Limited",
        url: "https://preventence.com/about",
        logo: "https://preventence.com/og-banner.png",
        description:
          "Preventence is a modern maintenance management software helping industrial teams reduce downtime, automate workflows, and improve asset reliability.",
        sameAs: [
          "https://in.linkedin.com/company/preventence-technology-private-limited",
          "https://twitter.com/preventence"
        ]
      })
    }
  ]
})
</script>
