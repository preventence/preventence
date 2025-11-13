<template>
  <div
    ref="sectionRef"
    :style="{ transitionDelay: delay + 'ms' }"
    :class="[
      'opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
      isVisible ? 'opacity-100 translate-y-0' : ''
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* Props */
const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

/* State */
const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

/* Lifecycle */
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect() // animate once
      }
    },
    {
      threshold: 0.15, // triggers at 15% visibility
      rootMargin: '0px 0px -10% 0px'
    }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
/* Optional: smoother GPU rendering */
div {
  will-change: opacity, transform;
}
</style>
