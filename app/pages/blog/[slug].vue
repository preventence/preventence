<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useAsyncData, queryCollection, useHead } from '#imports'

const activeId = ref('');
const route = useRoute()

// Fetch the specific blog post
const { data: doc } = await useAsyncData(`content-${route.path}`, () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

/* ================= SEO ================= */
useHead(() => {
  if (!doc.value) return {}
  return {
    title: `${doc.value.title} | Preventence Blog`,
    meta: [
      { name: 'description', content: doc.value.description || '' },
      { name: 'author', content: doc.value.author || 'Preventence Team' }
    ]
  }
})

/* ================= UTILS ================= */
function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function scrollToAnchor(event, id) {
  event.preventDefault()
  const el = document.getElementById(id)
  if (!el) return

  const offset = 100 
  const top = el.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: 'smooth' })
  activeId.value = id // Immediate UI feedback
}

/* ================= SCROLL SPY (Active State) ================= */
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Logic: Only update if the heading is passing through the top 30% of the screen
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
      }
    })
  }, { 
    rootMargin: '0% 0% -75% 0%', 
    threshold: 0.1 
  })

  // We only observe H2s now as you wanted to hide H3s from TOC
  const headings = document.querySelectorAll('.prose h2')
  headings.forEach((h) => observer.observe(h))

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <article class="bg-gray-50 min-h-screen pt-10 pb-16">
    <div v-if="doc" class="container mx-auto px-4 md:px-8 max-w-7xl">
      
      <header class="max-w-4xl mx-auto mb-4 text-center lg:text-left">
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center text-sm font-medium text-[#1297E0] hover:underline mb-6"
        >
          ← Back to Articles
        </NuxtLink>
        
        <h1 class="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-[#07416B] mb-6 leading-tight">
          {{ doc.title }}
        </h1>
        
        <div class="flex flex-wrap items-center justify-center lg:justify-start text-gray-500 gap-6 border-b border-gray-200 pb-8">
          <div class="flex items-center gap-2">
            <span class="font-medium text-gray-900">By {{ doc.author || 'Preventence Team' }}</span>
          </div>
          <span v-if="doc?.meta?.date" class="flex items-center gap-1">
            {{ formatDate(doc?.meta?.date) }}
          </span>
          <span v-if="doc?.meta?.readingtime" class="bg-blue-50 text-[#1297E0] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {{ doc?.meta?.readingtime || 2 }} min read
          </span>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
        <aside class="lg:col-span-4 order-first lg:order-last mb-8 lg:mb-0">
          <div v-if="doc.body?.toc?.links?.length" 
               class="lg:sticky lg:top-28 bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 class="text-lg font-bold text-[#07416B] mb-4 uppercase tracking-wider text-xs">
              In this article
            </h3>

            <nav>
              <ul class="space-y-2"> <li v-for="link in doc.body.toc.links" :key="link.id">
                  <a :href="`#${link.id}`" 
                    @click="scrollToAnchor($event, link.id)"
                    :class="[
                      'block text-sm transition-all duration-200 leading-snug py-1',
                      activeId === link.id 
                        ? 'text-[#1297E0] font-bold border-l-2 border-[#1297E0] pl-4 -ml-[25px] lg:-ml-[33px]' 
                        : 'text-slate-600 hover:text-[#1297E0] font-medium pl-0'
                    ]">
                    {{ link.text }}
                  </a>
                  </li>
              </ul>
            </nav>
          </div>
        </aside>

        <main class="lg:col-span-8 bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <ContentRenderer 
            :value="doc" 
            class="prose prose-slate max-w-none 
                   prose-p:leading-normal prose-p:my-3
                   prose-ul:my-4 prose-li:my-0" 
          />
        </main>
      </div>
    </div>

    <div v-else class="text-center py-32">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
      <NuxtLink to="/blog" class="px-6 py-3 bg-[#07416B] text-white rounded-lg font-bold hover:bg-[#1297E0] transition-colors">
        Browse All Articles
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
:deep(.prose) {
  --tw-prose-body: #475569;
  --tw-prose-headings: #07416B;
  --tw-prose-links: #1297E0;
}

:deep(.prose img) {
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Ensure smooth scrolling works even with browser defaults */
html {
  scroll-behavior: smooth;
}
</style>