<template>
  <div class="max-w-xl mx-auto bg-white rounded-xl p-6 shadow">
    <h3 class="text-lg font-bold text-[#07416B] mb-3">ROI Calculator</h3>

    <div class="space-y-4">
      <div>
        <label class="text-sm text-slate-600">Number of Machines</label>
        <input v-model.number="machines" type="range" min="1" max="1000" class="w-full" />
        <div class="text-sm text-slate-600 mt-1">Machines: <strong>{{ machines }}</strong></div>
      </div>

      <div>
        <label class="text-sm text-slate-600">Avg downtime cost per hour (₹)</label>
        <input v-model.number="downtimeCost" type="range" min="100" max="10000" step="50" class="w-full" />
        <div class="text-sm text-slate-600 mt-1">₹ <strong>{{ downtimeCost.toLocaleString() }}</strong> / hour</div>
      </div>

      <div class="pt-2 border-t">
        <div class="text-sm text-slate-600">Estimated annual savings (assuming <strong>{{ reductionPercent }}%</strong> reduction):</div>
        <div class="text-2xl font-bold text-[#1297E0] mt-2">₹ {{ estimatedSavings.toLocaleString() }}</div>
      </div>

      <div class="flex gap-3">
        <button @click="book" class="bg-[#1297E0] text-white px-4 py-2 rounded hover:bg-[#07416B]">Book a demo</button>
        <button @click="download" class="border px-4 py-2 rounded">Download report</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const machines = ref(50)
const downtimeCost = ref(1000)
const reductionPercent = 30 // assumed average reduction

const estimatedSavings = computed(() => {
  // simplistic formula: machines * downtimeCost * hoursPerYear * reductionPercent%
  const hoursPerYear = 8760 // full year
  const raw = machines.value * downtimeCost.value * hoursPerYear * (reductionPercent / 100) / 1000
  // return in thousands like ₹1,234,567
  return Math.round(raw)
})

function book() {
  // scroll to demo or open modal
  const btn = document.querySelector('button[aria-label="open-demo"]')
  // fallback: show alert
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

function download() {
  alert('Download placeholder — connect to backend to generate a report.')
}
</script>
