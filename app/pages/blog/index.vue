<template>
  <section class="py-10 md:py-24 bg-gray-50">
    <!-- Use a flexible responsive container -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 lg:gap-12">

      <!-- LEFT SIDEBAR (TOPICS) - Desktop/Tablet Sticky -->
      <aside class="
        hidden md:block
        w-full md:w-56 lg:w-64
        shrink-0
      ">
        <div class="sticky top-28 self-start bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 class="text-lg font-bold text-[#07416B] mb-4 border-b pb-2">
            Topics
          </h3>
          <ul class="space-y-1">
            <li v-for="tag in tags" :key="tag">
              <button @click="selectedTag = tag" class="w-full text-left px-3 py-2 rounded-lg transition text-sm font-medium" :class="[
                selectedTag === tag
                  ? 'bg-[#1976D2] text-white shadow-md' // Enhanced active state
                  : 'text-slate-700 hover:bg-slate-100'
              ]">
                {{ tag }}
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <!-- MAIN CONTENT AREA -->
      <div class="flex-1 min-w-0">
        <h1 class="text-4xl lg:text-5xl font-extrabold text-[#07416B] mb-4">
          Preventive Maintenance Blog
        </h1>
        <p class="text-slate-600 max-w-3xl mb-12 text-lg">
          Insights on preventive maintenance, reliability, and industrial operations, filtered by topic.
        </p>

        <!-- MOBILE TOPICS (Scrollable horizontal list) -->
        <div class="md:hidden mb-8 overflow-x-auto">
          <div class="flex gap-3 pb-2">
            <button v-for="tag in tags" :key="tag" @click="selectedTag = tag"
              class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition shadow-sm" :class="[
                selectedTag === tag
                  ? 'bg-[#1976D2] text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100' // Better mobile default button
              ]">
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- BLOG LIST GRID -->
        <div v-if="filteredBlogs.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink v-for="blog in filteredBlogs" :key="blog.path" :to="blog.path"
            class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
            
            <!-- Image Section -->
            <img :src="blog.meta.cover || 'https://placehold.co/600x400/07416B/FFFFFF?text=PM+Blog'"
              class="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              :alt="'Cover image for ' + blog.title" />

            <div class="p-6 flex flex-col h-auto">
              
              <!-- Metadata Row -->
              <p class="text-sm text-slate-500 mb-2">
                {{ formatDate(blog.meta.date) }} ·
                <span class="font-medium text-slate-700">
                  {{ blog.meta.readingtime }} min read
                </span>
              </p>

              <h2 class="text-xl font-bold mb-3 text-slate-900 leading-tight">
                {{ blog.title }}
              </h2>

              <!-- Description -->
              <p class="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                {{ blog.description }}
              </p>

              <!-- TAGS -->
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="tag in blog.tags" :key="tag"
                  class="text-xs font-medium bg-indigo-50 px-3 py-1 rounded-full text-indigo-700">
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <p v-else class="text-xl text-slate-500 mt-10 p-6 bg-white rounded-xl shadow-lg">
          No blogs found for the topic: <span class="font-semibold text-[#07416B]">{{ selectedTag }}</span>.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="js">
import { ref, computed } from 'vue'
// import { calculateReadingTime } from '~/utils/readingTime'

const selectedTag = ref('All')

// const { data: blogs } = await useAsyncData('blogs', () =>
//   queryCollection('blog')
//     .path('/blog')
//     .sort({ date: -1 })
//     .all()
// )

const { data: blogs } = await useAsyncData('blogs', () =>
  // Use 'blog' (the name of your collection)
  queryCollection('blog')
    .all()
)

const tags = computed(() => {
  if (!blogs.value) return []
  // const allTags = blogs.value.flatMap(b => b.meta.tags || [])
  const allTags = blogs.value.flatMap(b => b.tags || b.meta?.tags || [])
  return ['All', ...new Set(allTags)]
})

const filteredBlogs = computed(() => {
  if (!blogs.value) return []
  if (selectedTag.value === 'All') return blogs.value
  // return blogs.value.filter(blog =>
  //   blog.meta.tags?.includes(selectedTag.value)
  // )
  return blogs.value.filter(blog => {
     const blogTags = blog.tags || blog.meta?.tags || []
     return blogTags.includes(selectedTag.value)
  })
})

function formatDate(date) {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>