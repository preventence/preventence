<template>
  <h2 :id="id" class="text-3xl font-bold text-[#07416B] mt-12 mb-6 scroll-mt-28 group flex items-center">
    <slot />
    <a v-if="id" :href="`#${id}`" class="ml-2 opacity-0 group-hover:opacity-100 text-[#1297E0] transition-opacity">
      #
    </a>
  </h2>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  }
})
</script>