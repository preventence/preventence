<template>
  <section id="roi" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#07416B] mb-6">
          Calculate Your ROI
        </h2>
        <p class="text-lg text-gray-600">
          Discover how much Preventence can save your organization by reducing downtime and optimizing maintenance efficiency.
        </p>
      </div>

      <!-- Calculator Card -->
      <div
        class="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border border-gray-100"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Input Fields -->
          <div>
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Number of Machines</label>
              <input
                v-model.number="machines"
                type="number"
                min="1"
                placeholder="e.g., 50"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1297E0] focus:outline-none"
              />
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Average Downtime (hrs/month)</label>
              <input
                v-model.number="downtime"
                type="number"
                min="0"
                placeholder="e.g., 10"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1297E0] focus:outline-none"
              />
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Cost per Hour of Downtime ($)</label>
              <input
                v-model.number="costPerHour"
                type="number"
                min="0"
                placeholder="e.g., 500"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1297E0] focus:outline-none"
              />
            </div>

            <button
              @click="calculateROI"
              class="w-full bg-gradient-to-r from-[#1297E0] to-[#07416B] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Calculate Savings
            </button>
          </div>

          <!-- Results Display -->
          <div
            class="bg-gradient-to-br from-[#07416B] via-[#1297E0] to-[#07416B] text-white rounded-2xl p-8 flex flex-col justify-center items-center"
          >
            <h3 class="text-2xl font-bold mb-4">Your Estimated ROI</h3>

            <div v-if="showResult" class="text-center">
              <p class="text-5xl font-extrabold mb-2 transition-all duration-300">
                ${{ formattedSavings }}
              </p>
              <p class="text-blue-100 mb-6">
                Annual potential savings with Preventence
              </p>
              <div class="flex flex-col items-center space-y-3">
                <p class="text-sm text-blue-200">
                  Based on {{ machines }} machines and {{ downtime }} hrs downtime/month.
                </p>
                <p class="text-sm text-blue-200">
                  Estimated reduction: <span class="font-semibold text-white">50%</span> downtime.
                </p>
              </div>
            </div>

            <div v-else class="text-blue-100 text-center">
              <p class="text-lg mb-2">Enter your data to calculate savings</p>
              <p class="text-sm opacity-80">(No personal info required)</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-10">
          <button
            @click="$emit('openDemo')"
            class="bg-[#1297E0] hover:bg-[#07416B] text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const machines = ref(0)
const downtime = ref(0)
const costPerHour = ref(0)
const showResult = ref(false)

const savings = computed(() => {
  const monthlyLoss = machines.value * downtime.value * costPerHour.value
  const annualLoss = monthlyLoss * 12
  const reducedLoss = annualLoss * 0.5 // assume 50% reduction in downtime
  return reducedLoss
})

const formattedSavings = computed(() =>
  savings.value.toLocaleString(undefined, { maximumFractionDigits: 0 })
)

const calculateROI = () => {
  if (machines.value && downtime.value && costPerHour.value) {
    showResult.value = true
  }
}
</script>

<style scoped>
section {
  scroll-margin-top: 5rem;
}
</style>
