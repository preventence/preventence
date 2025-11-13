<template>
  <div
    itemscope
    itemtype="https://schema.org/Service"
    class="relative overflow-hidden rounded-2xl p-[2px]
           shadow-[0_4px_30px_rgba(0,0,0,0.08)]
           hover:shadow-[0_6px_40px_rgba(0,0,0,0.12)]
           hover:-translate-y-1 transition-all duration-300"
    :class="gradientClass"
  >
    <!-- Inner Card -->
    <div class="bg-white/90 backdrop-blur-xl rounded-2xl p-6 h-full">

      <!-- Icon -->
      <div
        class="flex items-center justify-center w-14 h-14 rounded-xl shadow-inner mb-5 transition-transform duration-300"
        :class="iconBg"
      >
        <component :is="icon" class="w-8 h-8" :class="iconColor" />
      </div>

      <!-- Title -->
      <h3 itemprop="name" class="text-xl font-semibold tracking-tight mb-2" :class="titleColor">
        {{ title }}
      </h3>

      <!-- Description -->
      <p itemprop="description" class="text-sm leading-relaxed mb-4 text-slate-600">
        {{ desc }}
      </p>

      <!-- Sub Items -->
      <ul v-if="items?.length" class="space-y-1">
        <li
          v-for="(item, i) in items"
          :key="i"
          class="flex items-start text-sm text-slate-700"
        >
          <span :class="['font-bold mr-2', bulletColor]">•</span>
          <span>{{ item }}</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: { type: [Object, Function], required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  items: { type: Array, default: () => [] },
  theme: { type: String, default: 'blue' } // blue, green, amber, purple
})

/* ===========================
COLOR MAPPINGS
============================= */

const gradients = {
  blue:  'bg-gradient-to-br from-[#1297E0] to-[#07416B]',
  green: 'bg-gradient-to-br from-[#10B981] to-[#065F46]',
  amber: 'bg-gradient-to-br from-[#F59E0B] to-[#B45309]',
  purple:'bg-gradient-to-br from-[#8B5CF6] to-[#5B21B6]'
}

const iconBgMap = {
  blue:  'bg-[#1297E0]/10',
  green: 'bg-[#10B981]/10',
  amber: 'bg-[#F59E0B]/10',
  purple:'bg-[#8B5CF6]/10'
}

const iconColorMap = {
  blue:  'text-[#1297E0]',
  green: 'text-[#10B981]',
  amber: 'text-[#F59E0B]',
  purple:'text-[#8B5CF6]'
}

const titleColorMap = {
  blue:  'text-[#07416B]',
  green: 'text-[#065F46]',
  amber: 'text-[#B45309]',
  purple:'text-[#5B21B6]'
}

const bulletColorMap = {
  blue:  'text-[#1297E0]',
  green: 'text-[#10B981]',
  amber: 'text-[#F59E0B]',
  purple:'text-[#8B5CF6]'
}

/* Computeds */
const gradientClass = gradients[props.theme]
const iconBg = iconBgMap[props.theme]
const iconColor = iconColorMap[props.theme]
const titleColor = titleColorMap[props.theme]
const bulletColor = bulletColorMap[props.theme]
</script>
