<template>
  <div class="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
    <table class="w-full text-left border-collapse bg-white">
      <slot />
    </table>
  </div>
</template>

<style scoped>
/* Using standard CSS to avoid @apply reference issues */
:deep(thead) {
  background-color: #f8fafc; /* gray-50 */
  border-bottom: 2px solid #f1f5f9; /* gray-100 */
}

:deep(th) {
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #07416B;
}

:deep(td) {
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: #475569;
  border-top: 1px solid #f1f5f9;
}

:deep(tr:hover) {
  background-color: #f0f9ff; /* blue-50 */
}
</style>