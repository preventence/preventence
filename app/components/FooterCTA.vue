<template>
  <section
    id="cta"
    class="relative py-28 overflow-hidden bg-gradient-to-br from-[#0A3258] via-[#0E4D80] to-[#1297E0] text-white"
  >
    <!-- Soft Overlay Lighting -->
    <!-- <div class="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_60%)] pointer-events-none"></div> -->

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl">
      <h2
        class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white"
      >
        Ready to Transform Your Maintenance Operations?
      </h2>
      <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-12 leading-relaxed">
        Join modern industrial teams automating preventive maintenance with intelligent scheduling and real-time insights.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-5 justify-center">
        <button
          @click="$emit('openDemo')"
          class="bg-white text-[#0A3258] px-10 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          Book a Demo
        </button>
        <a
          href="#features"
          class="border-2 border-white/80 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
        >
          Explore Features
        </a>
      </div>
    </div>

    <!-- Subtext -->
    <div class="relative z-10 mt-16 text-center text-sm text-blue-200 opacity-90">
      <p>
        Trusted by industries where reliability matters most — manufacturing, energy, and logistics.
      </p>
    </div>
  </section>
</template>


<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
</style>
