<template>
  <h1 :id="id" class="group mt-12 mb-6 text-3xl font-extrabold text-[#07416B] flex items-center gap-2">
    <slot />
    <a 
      v-if="id" 
      :href="`#${id}`" 
      class="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xl"
    >
      #
    </a>
  </h1>
</template>

<script setup>
defineProps({
  id: String
})
</script>