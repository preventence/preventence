<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center h-16 overflow-hidden">
          <img 
            src="/preventence-logo.svg" 
            alt="Preventence Logo" 
            class="h-40 w-auto object-contain -my-1"
          />
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- <a href="#features" class="text-gray-600 hover:text-[#1297E0] transition-colors">Features</a> -->
          <NuxtLink to="/features" class="text-gray-600 hover:text-[#1297E0] transition-colors">Features</NuxtLink>
          <a href="/#how-it-works" class="text-gray-600 hover:text-[#1297E0] transition-colors">How It Works</a>
          <a href="/#industries" class="text-gray-600 hover:text-[#1297E0] transition-colors">Industries</a>
          <a href="/#roi" class="text-gray-600 hover:text-[#1297E0] transition-colors">ROI Calculator</a>
          <a href="/#pricing" class="text-gray-600 hover:text-[#1297E0] transition-colors">Pricing</a>
          <a href="/#about" class="text-gray-600 hover:text-[#1297E0] transition-colors">About</a>
          <a href="/#blog" class="text-gray-600 hover:text-[#1297E0] transition-colors">Blog</a>
          <a href="/#contact" class="text-gray-600 hover:text-[#1297E0] transition-colors">Contact</a>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex items-center space-x-4">
          <NuxtLink href="https://app.preventence.com/" target="_blank" class="text-[#1297E0] hover:text-[#07416B] transition-colors font-medium">
            Log In
          </NuxtLink>
          <button 
            @click="$emit('openDemo')"
            class="bg-[#1297E0] hover:bg-[#07416B] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Book a Demo
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden text-gray-600" @click="toggleMobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
        <div class="flex flex-col space-y-3">
          <NuxtLink to="/features" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">Features</NuxtLink>
          <!-- <a href="#features" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">Features</a> -->
          <a href="/#how-it-works" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">How It Works</a>
          <a href="/#industries" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">Industries</a>
          <a href="/#roi" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">ROI Calculator</a>
          <a href="/#pricing" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">Pricing</a>
          <a href="/#about" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">About</a>
          <a href="/#blog" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">Blog</a>
          <a href="/#contact" class="text-gray-600 hover:text-[#1297E0]" @click="closeMobileMenu">Contact</a>

          <div class="flex flex-col space-y-2 pt-2">
            <NuxtLink href="https://app.preventence.com/" target="_blank" class="text-[#1297E0] hover:text-[#07416B] font-medium text-left">
              Log In
            </NuxtLink>
            <button 
              @click="$emit('openDemo'); closeMobileMenu()"
              class="bg-[#1297E0] hover:bg-[#07416B] text-white px-6 py-2 rounded-lg font-medium"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
