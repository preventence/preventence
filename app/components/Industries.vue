<template>
  <section id="industries" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#07416B] mb-6">
          Trusted Across Industries
        </h2>
        <p class="text-lg text-gray-600">
          Preventence empowers diverse industries to optimize their maintenance operations,
          ensuring safety, uptime, and efficiency — no matter the scale.
        </p>
      </div>

      <!-- Industry Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          v-for="(industry, index) in industries"
          :key="index"
          class="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
        >
          <div
            class="w-20 h-20 bg-gradient-to-br from-[#1297E0] to-[#07416B] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <component :is="industry.icon" class="w-10 h-10 text-white" />
          </div>

          <h3 class="text-2xl font-bold text-[#07416B] mb-4">
            {{ industry.title }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ industry.description }}
          </p>
        </div>
      </div>

      <!-- Subtext -->
      <div class="text-center mt-16">
        <p class="text-gray-500 text-lg">
          Whether you manage a <span class="text-[#1297E0] font-semibold">factory floor</span>,
          an <span class="text-[#1297E0] font-semibold">energy plant</span>, or a
          <span class="text-[#1297E0] font-semibold">fleet operation</span> — Preventence keeps your equipment running smoothly.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Factory, BatteryCharging, Truck, Stethoscope } from 'lucide-vue-next'

const industries = [
  {
    title: 'Manufacturing',
    description:
      'Streamline plant maintenance with automated scheduling and machine-level insights for optimal uptime.',
    icon: Factory,
  },
  {
    title: 'Energy & Utilities',
    description:
      'Monitor critical equipment health and prevent downtime with real-time performance dashboards.',
    icon: BatteryCharging,
  },
  {
    title: 'Logistics & Fleet',
    description:
      'Ensure smooth operations and reduce breakdowns with preventive care for vehicles and conveyors.',
    icon: Truck,
  },
  {
    title: 'Healthcare & Pharma',
    description:
      'Maintain compliance and operational safety for sensitive medical and production equipment.',
    icon: Stethoscope,
  },
]
</script>

<style scoped>
section {
  scroll-margin-top: 5rem; /* header offset */
}
</style>
