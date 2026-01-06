<template>
  <footer class="bg-[#E3F2FD] text-[#07416B] py-16 border-t border-[#BBDEFB]">
    <div class="container mx-auto px-6">
      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Logo & About -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="/Preventence-Transparent-logo.png" alt="Preventence Logo" class="h-10 w-auto" />
            <h3 class="text-xl font-bold">Preventence</h3>
          </div>
          <p class="text-sm text-[#07416B]/80 leading-relaxed">
            Preventive maintenance made intelligent.  
            Reduce downtime, boost reliability, and extend equipment life.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/features" class="hover:text-[#1297E0] transition">Features</NuxtLink></li>
            <li><a href="/#industries" class="hover:text-[#1297E0] transition">Industries</a></li>
            <li><a href="/#roi" class="hover:text-[#1297E0] transition">ROI Calculator</a></li>
            <li><a href="/#cta" class="hover:text-[#1297E0] transition">Get Started</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-[#1297E0] transition">About Us</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-gray-600 hover:text-[#1297E0]">Blog</NuxtLink></li>
            <!-- <li><a href="/#contact" class="hover:text-[#1297E0] transition">Contact</a></li> -->
            <li><a href="https://app.preventence.com/" target="_blank" class="hover:text-[#1297E0] transition">Login</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Contact</h4>
          <ul class="space-y-2 text-sm">
            <li>Email: <a href="mailto:admin@preventence.com" class="text-[#1297E0] hover:underline">admin@preventence.com</a></li>
            <li>Phone: +91 83297 72185</li>
            <li>Location: Pune, India</li>
          </ul>

          <!-- Social Icons -->
          <div class="flex space-x-4 mt-4">
            <a href="https://x.com/preventence" target="_blank" class="text-[#07416B] hover:text-[#1297E0] transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4.01c-.77.35-1.6.58-2.46.69A4.3 4.3 0 0 0 21.4 3c-.84.5-1.76.84-2.73 1A4.25 4.25 0 0 0 11.75 8c0 .33.04.65.1.96A12.06 12.06 0 0 1 3 4.48a4.25 4.25 0 0 0 1.31 5.68 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.22 4.22 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96A8.53 8.53 0 0 1 2 19.54a12.05 12.05 0 0 0 6.56 1.92c7.87 0 12.17-6.52 12.17-12.17v-.56A8.65 8.65 0 0 0 22 4.01z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/preventence-technology-private-limited/" target="_blank" class="text-[#07416B] hover:text-[#1297E0] transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-8 19h-3v-9h3v9zm-1.5-10.29a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42zm12.5 10.29h-3v-4.62c0-1.1-.02-2.52-1.54-2.52s-1.78 1.2-1.78 2.44v4.7h-3v-9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56c3.04 0 3.6 2 3.6 4.57v4.76z" />
              </svg>
            </a>
            <!-- <a href="#" class="text-[#07416B] hover:text-[#1297E0] transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.5c-.8.4-1.7.7-2.6.8a4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1 4.5 4.5 0 0 0-7.7 4.1 12.7 12.7 0 0 1-9.3-4.7 4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.4 4.4 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 2 20.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.9-7 12.9-13 0-.2 0-.4 0-.6A9.3 9.3 0 0 0 23.5 6.5z" />
              </svg>
            </a> -->
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-t border-[#BBDEFB] mb-6" />

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row justify-between items-center text-sm text-[#07416B]/80">
        <p>© {{ currentYear }} Preventence. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <!-- <a href="/privacy" class="hover:text-[#1297E0]">Privacy Policy</a> -->
          <a href="/#" class="hover:text-[#1297E0]">Privacy Policy</a>
          <!-- <a href="/terms" class="hover:text-[#1297E0]">Terms of Service</a> -->
          <a href="/#" class="hover:text-[#1297E0]">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>