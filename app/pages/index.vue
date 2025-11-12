<template>
  <div>
    <Hero @openDemo="openDemo = true" />

    <!-- Features -->
    <Features />
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
import Industries from '~/components/Industries.vue'
import ROICalculator from '~/components/ROICalculator.vue'
import FooterCTA from '~/components/FooterCTA.vue'
import { ref } from 'vue'

const openDemo = ref(false)
</script>
