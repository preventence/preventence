<template>
  <footer class="bg-[#E3F2FD] text-[#07416B] py-12 border-t border-[#BBDEFB]">
    <div class="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
      <div>
        <div class="flex items-center gap-3">
          <img src="/Preventence_Transparent_logo1.png" class="h-10" />
          <div>
            <h3 class="text-lg font-bold">Preventence</h3>
            <p class="text-sm opacity-90 max-w-xs">Intelligent preventive maintenance to reduce downtime & extend asset life.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div>
          <h4 class="font-semibold mb-3">Product</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#features" class="hover:underline">Features</a></li>
            <li><a href="#pricing" class="hover:underline">Pricing</a></li>
            <li><a href="/blog" class="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-3">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#about" class="hover:underline">About</a></li>
            <li><a href="#contact" class="hover:underline">Contact</a></li>
            <li><a href="/app/login" class="hover:underline">Login</a></li>
          </ul>
        </div>
      </div>

      <div>
        <h4 class="font-semibold mb-3">Subscribe</h4>
        <p class="text-sm mb-3">Get product updates and maintenance tips.</p>
        <form @submit.prevent="subscribe">
          <div class="flex gap-2">
            <input v-model="email" type="email" placeholder="Email address" required class="flex-1 px-3 py-2 rounded border" />
            <button class="bg-[#1297E0] text-white px-4 py-2 rounded hover:bg-[#07416B]">Subscribe</button>
          </div>
          <p v-if="msg" class="text-sm mt-2 text-[#07416B]">{{ msg }}</p>
        </form>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-6 mt-8 border-t border-[#BBDEFB] pt-6 text-sm text-[#07416B]/80 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>© 2025 Preventence. All rights reserved.</div>
      <div class="flex gap-4">
        <a href="#" class="hover:text-[#1297E0]">Privacy</a>
        <a href="#" class="hover:text-[#1297E0]">Terms</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const msg = ref('')
function subscribe() {
  msg.value = 'Thanks — we will keep you updated!'
  email.value = ''
}
</script>
