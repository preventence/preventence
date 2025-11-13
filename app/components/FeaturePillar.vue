<template>
  <NuxtLink
    to="/features"
    class="group block rounded-2xl p-8 bg-gradient-to-br from-[#1297E0] to-[#07416B]
           text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <div class="mb-6">
      <component :is="icon" class="w-12 h-12 text-white opacity-90 group-hover:opacity-100" />
    </div>

    <h3 class="text-2xl font-bold mb-3">
      {{ title }}
    </h3>

    <p class="text-white/80 text-sm leading-relaxed">
      {{ desc }}
    </p>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  icon: { type: [Object, Function], required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true }
})
</script>
