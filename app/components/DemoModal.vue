<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="show" class="fixed inset-0 z-60 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/40" @click="close" />
        <div class="relative bg-white rounded-xl w-full max-w-xl p-6 z-10 shadow-xl">
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-xl font-bold text-[#07416B]">Book a Demo</h3>
            <button @click="close" class="text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <form class="mt-4 space-y-4" @submit.prevent="submit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input v-model="form.name" placeholder="Your name" required class="px-3 py-2 border rounded" />
              <input v-model="form.email" type="email" placeholder="Work email" required class="px-3 py-2 border rounded" />
            </div>
            <input v-model="form.company" placeholder="Company" class="w-full px-3 py-2 border rounded" />
            <textarea v-model="form.message" placeholder="Tell us what you want to achieve" rows="4" class="w-full px-3 py-2 border rounded"></textarea>

            <div class="flex items-center justify-between gap-4">
              <button type="submit" class="bg-[#1297E0] text-white px-4 py-2 rounded hover:bg-[#07416B]">Request Demo</button>
              <div v-if="status" class="text-sm text-green-600">{{ status }}</div>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false }
})
const emit = defineEmits(['update:show'])

const form = ref({ name: '', email: '', company: '', message: '' })
const status = ref('')

watch(() => props.show, val => {
  // no-op, but keeps component reactive to v-model
})

function close() {
  emit('update:show', false)
  status.value = ''
}

function submit() {
  // placeholder: you should wire this to your form backend
  status.value = 'Request received. We will contact you shortly.'
  form.value = { name: '', email: '', company: '', message: '' }
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{transition:opacity .2s}
.fade-enter-from,.fade-leave-to{opacity:0}
</style>
