<template>
  <section id="features" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#07416B] mb-6">
          Complete Maintenance Management
        </h2>
        <p class="text-lg md:text-xl text-gray-600">
          Preventence brings everything you need to streamline preventive maintenance — 
          from intelligent scheduling to real-time asset insights.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-[#1297E0] to-[#07416B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <component :is="feature.icon" class="w-8 h-8 text-white" />
          </div>

          <h3 class="text-2xl font-bold text-[#07416B] mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 mb-4">{{ feature.description }}</p>

          <ul class="text-sm text-gray-500 space-y-2">
            <li v-for="(point, i) in feature.points" :key="i">
              • {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Calendar, Activity, ClipboardCheck, Warehouse, Users, Package } from 'lucide-vue-next'

const features = [
  {
    title: 'Smart Scheduling',
    description: 'Automate preventive maintenance planning with intelligent scheduling and technician optimization.',
    points: ['Auto-generate work orders', 'Assign by skill and availability', 'Reduce human scheduling errors'],
    icon: Calendar,
  },
  {
    title: 'Live Analytics',
    description: 'Monitor OEE, downtime, and task completion in real time through interactive dashboards.',
    points: ['Real-time KPI dashboards', 'Downtime root cause analysis', 'Performance trends'],
    icon: Activity,
  },
  {
    title: 'Digital SOPs',
    description: 'Standardize procedures with interactive checklists, SOP documents, and compliance tracking.',
    points: ['Custom checklists', 'Photo & note capture', 'Audit compliance reports'],
    icon: ClipboardCheck,
  },
  {
    title: 'Asset Intelligence',
    description: 'Centralized asset management with machine history, version control, and lifecycle analytics.',
    points: ['Machine history & logs', 'Version tracking', 'Health scoring'],
    icon: Warehouse,
  },
  {
    title: 'Role-Based Access',
    description: 'Give Admins, Supervisors, and Technicians proper permissions to maintain workflow control.',
    points: ['Granular permissions', 'Department access limits', 'User activity logs'],
    icon: Users,
  },
  {
    title: 'Smart Inventory',
    description: 'Track spare parts, modules, and components linked with machine IDs for effortless inventory visibility.',
    points: ['Parts version control', 'Low-stock alerts', 'Auto-linking with assets'],
    icon: Package,
  },
]
</script>

<style scoped>
section {
  scroll-margin-top: 5rem; /* offset for sticky header */
}
</style>
