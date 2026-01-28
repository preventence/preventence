<template>
  <section
    id="roi"
    class="py-[clamp(3.5rem,6vh,5rem)] bg-[#F8FAFC] relative overflow-hidden"
  >
    <!-- Background glows -->
    <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-10">
        <span
          class="text-[#1297E0] font-bold tracking-[0.2em] uppercase text-[10px]
                 bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm"
        >
          ROI Analysis Tool
        </span>

        <h2
          class="text-3xl md:text-5xl font-black text-[#07416B]
                 mt-4 mb-3 leading-[1.05] tracking-tight"
        >
          Quantify the Value of <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r
                   from-[#1297E0] to-blue-400"
          >
            Predictive Intelligence
          </span>
        </h2>

        <p class="text-base text-gray-500 font-medium max-w-xl mx-auto">
          Adjust the parameters below to see how Preventence transforms operational
          downtime into bottom-line profit.
        </p>
      </div>

      <!-- Calculator Card -->
      <div
        class="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-[32px]
               shadow-[0_32px_80px_-20px_rgba(7,65,107,0.08)]
               border border-white overflow-hidden"
      >
        <div class="flex flex-col lg:flex-row">
          <!-- Left: Inputs -->
          <div class="flex-1 p-6 md:p-8 lg:p-10 space-y-10 bg-white/40">
            <h3
              class="text-[10px] font-black text-gray-400 uppercase tracking-widest
                     flex items-center gap-3"
            >
              Operational Parameters
            </h3>

            <!-- Machines -->
            <div class="space-y-4">
              <div class="flex justify-between items-end">
                <label class="font-bold text-[#07416B] text-sm">
                  Number of Machines
                </label>
                <div class="relative">
                  <input
                    type="number"
                    max="2000"
                    v-model.number="machines"
                    class="w-24 pl-4 pr-10 py-2 text-right font-black text-[#1297E0]
                           bg-white border-2 border-gray-100 rounded-xl
                           focus:border-[#1297E0] outline-none"
                  />
                  <span
                    class="absolute right-3 top-1/2 -translate-y-1/2
                           text-[10px] font-bold text-gray-400 uppercase"
                  >
                    Qty
                  </span>
                </div>
              </div>
              <input type="range" v-model.number="machines" min="1" max="500" class="premium-slider" />
            </div>

            <!-- Downtime -->
            <div class="space-y-4">
              <div class="flex justify-between items-end">
                <label class="font-bold text-[#07416B] text-sm">
                  Avg. Downtime / Machine
                </label>
                <div class="relative">
                  <input
                    type="number"
                    max="695"
                    v-model.number="downtime"
                    class="w-24 pl-4 pr-10 py-2 text-right font-black text-[#1297E0]
                           bg-white border-2 border-gray-100 rounded-xl
                           focus:border-[#1297E0] outline-none"
                  />
                  <span
                    class="absolute right-3 top-1/2 -translate-y-1/2
                           text-[10px] font-bold text-gray-400 uppercase"
                  >
                    Hrs
                  </span>
                </div>
              </div>
              <input type="range" v-model.number="downtime" min="1" max="100" class="premium-slider" />
            </div>

            <!-- Cost -->
            <div class="space-y-4">
              <div class="flex justify-between items-end">
                <label class="font-bold text-[#07416B] text-sm">
                  Opportunity Cost
                </label>
                <div class="relative">
                  <span
                    class="absolute left-3 top-1/2 -translate-y-1/2
                           text-xs font-bold text-gray-400"
                  >
                    $
                  </span>
                  <input
                    type="number"
                    v-model.number="costPerHour"
                    class="w-28 pl-6 pr-10 py-2 text-right font-black text-[#1297E0]
                           bg-white border-2 border-gray-100 rounded-xl
                           focus:border-[#1297E0] outline-none"
                  />
                  <span
                    class="absolute right-3 top-1/2 -translate-y-1/2
                           text-[10px] font-bold text-gray-400 uppercase"
                  >
                    / Hr
                  </span>
                </div>
              </div>
              <input
                type="range"
                v-model.number="costPerHour"
                min="100"
                max="10000"
                step="100"
                class="premium-slider"
              />
            </div>
          </div>

          <!-- Right: Results -->
          <div
            class="w-full lg:w-[440px] bg-gradient-to-br
                   from-[#07416B] via-[#052e4d] to-[#041d31]
                   text-white p-6 md:p-10 lg:p-12 relative
                   flex flex-col justify-between shrink-0"
          >
            <div
              class="absolute top-0 right-0 w-72 h-72 bg-[#1297E0]
                     rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"
            ></div>

            <div class="relative z-10">
              <h4
                class="text-blue-300 font-bold uppercase tracking-[0.2em]
                       text-[10px] mb-4 opacity-80"
              >
                Estimated Annual Savings
              </h4>

              <div class="flex items-baseline gap-1">
                <span class="text-xl font-light text-blue-400">$</span>
                <span
                  class="text-[clamp(2rem,3.5vw,2.8rem)]
                         font-black tracking-tighter leading-none break-all"
                >
                  {{ animatedSavings }}
                </span>
              </div>

              <div class="mt-12 space-y-8">
                <div class="flex justify-between items-center pb-4 border-b border-white/10">
                  <div>
                    <p class="text-blue-300/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                      Total Current Loss
                    </p>
                    <p class="text-xl font-bold">${{ annualLossFormatted }}</p>
                  </div>
                  <span
                    :class="impactClass"
                    class="text-[10px] px-3 py-1 rounded-full font-black uppercase"
                  >
                    {{ impactLabel }}
                  </span>
                </div>

                <div class="space-y-3">
                  <div class="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span class="text-gray-400">Status Quo</span>
                    <span class="text-[#1297E0]">Preventence Gain</span>
                  </div>
                  <div class="h-3 w-full bg-white/5 rounded-full p-1 flex">
                    <div class="h-full bg-white/10 rounded-full w-1/2"></div>
                    <div
                      class="h-full w-1/2 bg-gradient-to-r from-[#1297E0] to-blue-400
                             rounded-full shadow-[0_0_20px_rgba(18,151,224,0.4)]"
                    ></div>
                  </div>
                  <p class="text-[11px] text-blue-200/40 text-center italic">
                    Based on 50% reduction in unplanned downtime
                  </p>
                </div>
              </div>
            </div>

            <button
              @click="$emit('openDemo')"
              class="relative z-10 mt-12 w-full bg-[#1297E0] text-white
                     font-bold py-4 rounded-xl transition-all
                     hover:bg-white hover:text-[#07416B]
                     hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Full Efficiency Audit →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const machines = ref(45)
const downtime = ref(12)
const costPerHour = ref(1200)

const animatedSavingsValue = ref(0)
const animatedSavings = computed(() =>
  Math.floor(animatedSavingsValue.value).toLocaleString()
)

const annualLoss = computed(
  () => machines.value * downtime.value * costPerHour.value * 12
)

const savings = computed(() => annualLoss.value * 0.5)

const annualLossFormatted = computed(() =>
  annualLoss.value.toLocaleString()
)

const impactLabel = computed(() => {
  if (savings.value > 1_000_000) return 'High Enterprise Impact'
  if (savings.value > 250_000) return 'Significant Growth'
  return 'Moderate Improvement'
})

const impactClass = computed(() => {
  if (savings.value > 1_000_000) return 'bg-amber-400 text-[#07416B]'
  if (savings.value > 250_000) return 'bg-blue-400 text-white'
  return 'bg-white/20 text-blue-100'
})

const animateValue = (target) => {
  const duration = 900
  const start = animatedSavingsValue.value
  const startTime = performance.now()

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1)
    const ease = 1 - Math.pow(2, -10 * progress)
    animatedSavingsValue.value = start + (target - start) * ease
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

watch(savings, animateValue)

onMounted(() => {
  animatedSavingsValue.value = savings.value
})
</script>

<style scoped>
.premium-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: #f1f5f9;
  border-radius: 10px;
}

.premium-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 26px;
  height: 26px;
  background: white;
  border: 2px solid #1297E0;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 8px 12px rgba(18, 151, 224, 0.25);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.premium-slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  background: #1297E0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number] {
  -moz-appearance: textfield;
}

.tracking-tighter {
  letter-spacing: -0.04em;
}
</style>