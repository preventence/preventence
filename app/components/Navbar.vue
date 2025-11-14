<template>
    <header class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b z-50">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
            <div class="flex items-center gap-2">
                <img src="/Preventence-Transparent-logo.png" alt="Preventence" class="h-10 w-auto" />
                <span class="font-extrabold text-[#07416B] text-lg md:text-xl">Preventence</span>
            </div>

            <nav class="hidden md:flex gap-6 text-sm font-medium text-primary">
                <NuxtLink to="/" class="hover:text-accent">Home</NuxtLink>
                <NuxtLink to="/features" class="hover:text-accent">Features</NuxtLink>
                <NuxtLink to="/pricing" class="hover:text-accent">Pricing</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-accent">Contact</NuxtLink>
            </nav>

            <NuxtLink to="/contact"
                class="hidden md:inline-block bg-[#1976D2] text-white px-4 py-2 rounded-lg hover:bg-[#07416B] transition">
                Request Demo
            </NuxtLink>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-primary" @click="open = !open">
                <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <transition name="fade">
            <div v-if="open" class="md:hidden border-t bg-white">
                <div class="px-4 py-3 flex flex-col space-y-2 text-primary">
                    <NuxtLink to="/" @click="open = false">Home</NuxtLink>
                    <NuxtLink to="/features" @click="open = false">Features</NuxtLink>
                    <NuxtLink to="/pricing" @click="open = false">Pricing</NuxtLink>
                    <NuxtLink to="/contact" @click="open = false">Contact</NuxtLink>
                    <NuxtLink to="/contact" @click="open = false" class="mt-2 bg-accent text-white px-4 py-2 rounded">
                        Request Demo</NuxtLink>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
