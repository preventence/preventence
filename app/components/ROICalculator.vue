<template>
  <section id="roi" class="py-28 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-6">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-4xl md:text-5xl font-bold text-[#07416B] mb-6">
          Calculate Your ROI
        </h2>
        <p class="text-lg text-gray-600">
          See how much Preventence can save you by reducing downtime and
          improving preventive maintenance efficiency.
        </p>
      </div>

      <!-- Calculator -->
      <div
        class="relative max-w-5xl mx-auto bg-white/70 backdrop-blur-xl
               rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]
               border border-white/40 p-10 md:p-14"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">

          <!-- Inputs -->
          <div class="space-y-10">
            <!-- Machines -->
            <div>
              <label class="block font-medium text-gray-700 mb-3">
                Number of Machines
              </label>
              <div class="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="500"
                  v-model.number="machines"
                  class="w-full accent-[#1297E0]"
                />
                <input
                  type="number"
                  v-model.number="machines"
                  min="1"
                  class="w-24 px-3 py-2 border rounded-lg text-center"
                />
              </div>
            </div>

            <!-- Downtime -->
            <div>
              <label class="block font-medium text-gray-700 mb-3">
                Avg Downtime (hrs / month / machine)
              </label>
              <div class="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  v-model.number="downtime"
                  class="w-full accent-[#1297E0]"
                />
                <input
                  type="number"
                  v-model.number="downtime"
                  min="0"
                  class="w-24 px-3 py-2 border rounded-lg text-center"
                />
              </div>
            </div>

            <!-- Cost -->
            <div>
              <label class="block font-medium text-gray-700 mb-3">
                Cost per Hour of Downtime ($)
              </label>
              <div class="flex items-center gap-4">
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  v-model.number="costPerHour"
                  class="w-full accent-[#1297E0]"
                />
                <input
                  type="number"
                  v-model.number="costPerHour"
                  min="0"
                  class="w-28 px-3 py-2 border rounded-lg text-center"
                />
              </div>
            </div>

            <p class="text-sm text-gray-500">
              Conservative estimate based on industry benchmarks.
              Assumes <strong>50% reduction</strong> in downtime.
            </p>
          </div>

          <!-- Results -->
          <div
            class="relative rounded-3xl p-10 text-white overflow-hidden
                   bg-gradient-to-br from-[#07416B] via-[#1297E0] to-[#07416B]"
          >
            <div class="absolute inset-0 bg-white/10 blur-3xl"></div>

            <div class="relative z-10">
              <h3 class="text-2xl font-semibold mb-6">
                Estimated Annual Savings
              </h3>

              <Transition name="scale-fade">
                <div>
                  <p class="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
                    ${{ animatedSavings }}
                  </p>

                  <p class="text-blue-100 mb-8">
                    Potential yearly savings using Preventence
                  </p>

                  <div class="space-y-4 text-sm text-blue-100">
                    <div class="flex justify-between">
                      <span>Annual Downtime Cost</span>
                      <span class="font-semibold text-white">
                        ${{ annualLossFormatted }}
                      </span>
                    </div>
                    <div class="flex justify-between">
                      <span>Estimated Reduction</span>
                      <span class="font-semibold text-white">50%</span>
                    </div>
                  </div>

                  <div class="flex flex-wrap gap-3 mt-8">
                    <span class="px-4 py-2 rounded-full bg-white/15 text-sm">
                      {{ machines }} Machines
                    </span>
                    <span class="px-4 py-2 rounded-full bg-white/15 text-sm">
                      {{ downtime }} hrs downtime
                    </span>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-14">
          <button
            @click="$emit('openDemo')"
            class="inline-flex items-center gap-3 bg-[#1297E0]
                   hover:bg-[#07416B] text-white px-10 py-4
                   rounded-xl font-semibold transition-all
                   hover:scale-[1.03]"
          >
            See Preventence in Action →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const machines = ref(50)
const downtime = ref(10)
const costPerHour = ref(500)

const animatedSavings = ref('0')

const annualLoss = computed(() =>
  machines.value * downtime.value * costPerHour.value * 12
)

const savings = computed(() => annualLoss.value * 0.5)

const annualLossFormatted = computed(() =>
  annualLoss.value.toLocaleString()
)

/* Animate number — CLIENT ONLY */
onMounted(() => {
  watch(
    savings,
    (newVal) => {
      const duration = 600
      const start = Number(animatedSavings.value.replace(/,/g, '')) || 0
      const startTime = performance.now()

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1)
        const value = Math.floor(start + (newVal - start) * progress)
        animatedSavings.value = value.toLocaleString()

        if (progress < 1) {
          window.requestAnimationFrame(animate)
        }
      }

      window.requestAnimationFrame(animate)
    },
    { immediate: true }
  )
})
</script>

<style scoped>
.scale-fade-enter-active {
  transition: all 0.4s ease;
}
.scale-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
</style>
