<template>
    <div class="flex flex-col min-h-screen bg-white text-slate-800">
        <!-- Header -->
        <Header @openDemo="openDemo = true" />

        <!-- Page Content -->
        <main class="flex-1">
            <Transition name="fade" mode="out-in">
                <slot />
            </Transition>
        </main>

        <!-- Footer -->
        <Footer />

        <!-- Demo Modal -->
        <DemoModal v-model:show="openDemo" />
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import DemoModal from '~/components/DemoModal.vue'
import { useRetryQueue } from "~/composables/useRetryQueue";
const { processQueue } = useRetryQueue();

import { onMounted, ref } from "vue";

const openDemo = ref(false);

onMounted(() => {
  processQueue(); // auto-retry when backend wakes up
});
</script>
