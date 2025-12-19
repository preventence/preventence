<template>
  <li class="relative pl-7 mb-1 text-[17px] text-gray-700 group">
    <div class="absolute left-0 top-1 flex items-center justify-center">
      <span class="w-4 h-4 rounded bg-blue-50 border border-[#1297E0] flex items-center justify-center group-hover:bg-[#1297E0] transition-colors">
        <svg class="w-2.5 h-2.5 text-[#1297E0] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </div>
    
    <div class="leading-normal">
      <slot />
    </div>
  </li>
</template>