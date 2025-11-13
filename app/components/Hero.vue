<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-gray-900 text-white pt-16 pb-20 md:pt-20 md:pb-24 lg:min-h-screen lg:flex lg:items-center"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-[#07416B] to-[#011B31] opacity-95"
    ></div>
    <div
      class="absolute inset-0 opacity-10 pointer-events-none"
      style="
        background-image: linear-gradient(
            to right,
            #ffffff1a 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff1a 1px, transparent 1px);
        background-size: 40px 40px;
      "
    ></div>

    <div
      class="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#011B31] to-transparent z-0 opacity-50"
    ></div>
    <div
      class="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#011B31] to-transparent z-0 opacity-50"
    ></div>

    <div
      class="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      <div class="text-center lg:text-left">
        <span
          class="inline-flex items-center bg-blue-500/20 text-blue-300 border border-blue-500/50 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold mb-5 animate-fade-in-up"
          style="animation-delay: 0.1s"
        >
          <svg class="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12.5a.5.5 0 011 0v.5a.5.5 0 01-1 0v-.5zM10 7a1 1 0 011 1v4a1 1 0 01-2 0V8a1 1 0 011-1z"/></svg>
          Preventive Maintenance Reimagined
        </span>

        <!-- <h1
          class="text-5xl md:text-6xl font-extrabold leading-tight mb-5 animate-fade-in-up"
          style="animation-delay: 0.2s"
        >
          <span class="inline">Minimize Downtime,</span>
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200"
          >
            Maximize Reliability
          </span>
        </h1> -->

        <div class="text-center md:text-left">
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tight mb-5 animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <span class="inline">Minimize Downtime,</span><br/>
            <span
              class="inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200"
            >
              Maximize Reliability
            </span>
          </h1>
        </div>


        <!-- <div data-aos="fade-up" data-aos-delay="200">
          <h1 class="text-5xl font-bold mb-4">Minimize Downtime, Maximize Reliability</h1>
        </div> -->

        <p
          class="text-lg text-blue-200 mb-8 leading-relaxed animate-fade-in-up"
          style="animation-delay: 0.3s"
        >
          Preventence is a modern maintenance management software that empowers industrial teams to automate workflows, track assets in real time, and extend equipment life with intelligent scheduling and analytics.
          <!-- Preventence empowers industrial teams to automate maintenance
          workflows, track assets in real-time, and extend equipment life through
          intelligent scheduling and analytics. -->
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up"
          style="animation-delay: 0.4s"
        >
          <button
            class="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/30 active:scale-[0.98]"
          >
            Start Free Trial
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
          <button
            class="inline-flex items-center justify-center border-2 border-blue-400 text-blue-200 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300 active:scale-[0.98]"
          >
            Watch Demo
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>
          </button>
        </div>

        <div
          ref="statsContainer"
          class="grid grid-cols-2 md:grid-cols-4 gap-6 text-left animate-fade-in-up"
          style="animation-delay: 0.5s"
        >
          <div class="stat-item">
            <div
              class="text-3xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
            >
              {{ stats.uptime.value }}%
            </div>
            <div class="text-blue-300 text-sm tracking-wider uppercase">
              Uptime
            </div>
          </div>
          
          <!-- <div class="stat-item border-2 border-yellow-400 rounded-lg p-3 -m-3 transform scale-105 transition-transform duration-300">
            <div
              class="text-3xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white"
            >
              {{ stats.downtime.value }}%
            </div>
            <div class="text-blue-300 text-sm tracking-wider uppercase">
              Downtime Reduction
            </div>
          </div> -->

           <div class="stat-item">
            <div
                class="text-4xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white"
                >
                {{ stats.downtime.value }}%
            </div>
            <div class="text-blue-300 text-sm tracking-wider uppercase">
              Downtime Reduction
            </div>
          </div>
          
          <div class="stat-item">
            <div
              class="text-3xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
            >
              {{ stats.cost.value }}%
            </div>
            <div class="text-blue-300 text-sm tracking-wider uppercase">
              Cost Savings
            </div>
          </div>
          <div class="stat-item">
            <div
              class="text-3xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
            >
              {{ stats.monitoring.value }}
            </div>
            <div class="text-blue-300 text-sm tracking-wider uppercase">
              Monitoring
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative flex justify-center lg:justify-end w-full lg:w-1/2 mt-8 lg:mt-0 perspective max-w-lg"
      >
        <div
          ref="heroVisual"
          class="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 w-full hero-visual border border-blue-500/30 shadow-2xl shadow-blue-900/50"
          style="
            --tw-rotate-x: 0deg;
            --tw-rotate-y: 0deg;
            transform: perspective(1000px) rotateX(var(--tw-rotate-x))
              rotateY(var(--tw-rotate-y));
          "
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          <div
            class="text-center text-blue-300 text-sm mb-4 border-b pb-3 border-blue-500/20"
          >
            <span class="uppercase tracking-widest font-medium"
              >Real-time Maintenance Snapshot</span
            >
          </div>
          <div class="space-y-4">
            <div
              class="h-28 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600 inner-glow"
            >
              <p class="text-blue-400 text-sm">Asset Health Trend (Graph)</p>
            </div>

            <div class="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
              <h4 class="text-white font-semibold mb-3">Tasks Due Today</h4>
              <ul class="space-y-2 text-sm">
                <li class="flex justify-between items-center text-blue-200">
                  <span>Calibration Check (A)</span>
                  <span class="text-yellow-400 font-bold">High</span>
                </li>
                <li class="flex justify-between items-center text-blue-200">
                  <span>Filter Replacement (H3)</span>
                  <span class="text-green-400 font-bold">Scheduled</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// Reactive refs for statistics
const statsContainer = ref(null);
const stats = reactive({
  uptime: { target: 99.9, value: 0, formatter: (val) => val.toFixed(1) },
  downtime: { target: 50, value: 0, formatter: (val) => Math.round(val) },
  cost: { target: 30, value: 0, formatter: (val) => Math.round(val) },
  monitoring: { target: '24/7', value: '0' },
});

// --- Counting Animation Logic ---
const runCounter = (key) => {
  const stat = stats[key];
  if (key === 'monitoring') {
    setTimeout(() => {
      stat.value = stat.target;
    }, 500);
    return;
  }

  const start = 0;
  const end = stat.target;
  const duration = 1500;
  let startTime = null;

  const animateCount = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    const currentValue = start + (end - start) * percentage;

    stat.value = stat.formatter(currentValue);

    if (percentage < 1) {
      requestAnimationFrame(animateCount);
    } else {
      stat.value = stat.formatter(end);
    }
  };

  requestAnimationFrame(animateCount);
};

const hasAnimated = ref(false);

onMounted(() => {
  if (statsContainer.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            Object.keys(stats).forEach(runCounter);
            hasAnimated.value = true;
            observer.unobserve(statsContainer.value);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsContainer.value);
  }
});

// --- 3D Hover Logic ---
const heroVisual = ref(null);
const ROTATION_LIMIT = 5;

const handleMouseMove = (event) => {
  if (!heroVisual.value) return;

  const rect = heroVisual.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const x = (event.clientX - centerX) / (rect.width / 2);
  const y = (event.clientY - centerY) / (rect.height / 2);

  const rotateY = -x * ROTATION_LIMIT;
  const rotateX = y * ROTATION_LIMIT;

  heroVisual.value.style.setProperty('--tw-rotate-x', `${rotateX}deg`);
  heroVisual.value.style.setProperty('--tw-rotate-y', `${rotateY}deg`);
};

const handleMouseLeave = () => {
  if (!heroVisual.value) return;

  heroVisual.value.style.setProperty('--tw-rotate-x', '0deg');
  heroVisual.value.style.setProperty('--tw-rotate-y', '0deg');
};
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

/* 3D Hover Setup */
.hero-visual {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}

/* Inner Glow/Shadow for Screen Realism */
.inner-glow {
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4);
}

/* The subtle 'floating' animation */
@keyframes heroFloat {
  0%, 100% {
    transform: perspective(1000px) rotateX(var(--tw-rotate-x, 0deg)) rotateY(var(--tw-rotate-y, 0deg)) translateY(0);
  }
  50% {
    transform: perspective(1000px) rotateX(var(--tw-rotate-x, 0deg)) rotateY(var(--tw-rotate-y, 0deg)) translateY(-8px);
  }
}

.hero-visual {
  animation: heroFloat 5s ease-in-out infinite;
}
</style>