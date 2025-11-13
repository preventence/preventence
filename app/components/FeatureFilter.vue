<template>
  <div class="mb-8">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="flex-1">
        <input
          v-model="modelValue"
          @input="$emit('update:search', modelValue)"
          type="search"
          placeholder="Search features, e.g. 'scheduling', 'dashboards'..."
          class="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1297E0]/30"
        />
      </div>

      <div class="flex gap-2 items-center flex-wrap">
        <button
          v-for="cat in ['All', ...categories]"
          :key="cat"
          @click="$emit('update:category', cat)"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            activeCategory === cat || (cat === 'All' && !activeCategory)
              ? 'bg-[#1297E0] text-white shadow'
              : 'bg-white border border-gray-200 text-slate-700 hover:bg-gray-50'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, toRef } from 'vue'
const props = defineProps({
  categories: { type: Array, default: () => [] },
  activeCategory: { type: String, default: '' },
  search: { type: String, default: '' },
})
const emit = defineEmits(['update:search', 'update:category'])
const modelValue = ref(props.search)

watch(
  () => props.search,
  (v) => {
    modelValue.value = v
  }
)
</script>

<style scoped>
/* small tweaks via Tailwind only */
</style>
