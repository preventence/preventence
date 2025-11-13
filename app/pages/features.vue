<template>
  <div class="min-h-screen bg-white text-slate-800">

    <!-- =============================
    HERO — Premium Gradient Header
    ============================== -->
    <section
      class="bg-gradient-to-br from-[#07416B] via-[#1297E0] to-[#07416B] text-white py-20 relative overflow-hidden">

      <!-- Soft glow pattern -->
      <div
        class="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_top_left,#ffffff_10%,transparent_60%)]">
      </div>

      <div class="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Explore All Features
        </h1>
        <p class="max-w-3xl mx-auto text-blue-100 text-lg leading-relaxed">
          Discover the complete suite of Preventence maintenance capabilities — built to reduce downtime,
          optimize assets, and deliver world-class operational reliability.
        </p>
      </div>
    </section>

    <!-- =============================
    Feature Filters + Grid
    ============================== -->
    <section class="py-16">
      <div class="container mx-auto px-6 md:px-12">

        <!-- Filter section -->
        <FeatureFilter
          :categories="categories"
          :activeCategory="activeCategory"
          :search="search"
          @update:category="val => activeCategory = val === 'All' ? '' : val"
          @update:search="val => search = val"
        />

        <!-- Category Headers -->
        <div v-if="!search && !activeCategory" class="mt-10 mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
            All Features ({{ filteredFeatures.length }})
          </h2>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <AnimatedSection
            v-for="(f, i) in filteredFeatures"
            :key="f.title"
            :delay="i * 35"
          >
            <FeatureCard
              :icon="f.icon"
              :title="f.title"
              :desc="f.desc"
              :items="f.items"
            />
          </AnimatedSection>
        </div>

        <!-- Empty State -->
        <div v-if="filteredFeatures.length === 0"
             class="text-center py-20 text-slate-500 text-lg">
          No matching features found. Try a different keyword or filter.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/* ==========================
Imports
=========================== */
import { ref, computed } from 'vue'
import { useHead } from '#imports'

import FeatureFilter from '~/components/FeatureFilter.vue'
import FeatureCard from '~/components/FeatureCard.vue'
import AnimatedSection from '~/components/AnimatedSection.vue'

/* lucide icons */
import {
  ClipboardList,
  CalendarCheck,
  AlertCircle,
  List,
  Layers,
  UserCheck,
  Clock,
  Factory,
  Box,
  Users,
  Shield,
  Bell,
  BarChart2,
  Monitor,
  Activity,
  FileText,
  Cloud,
  Zap,
  Calendar,
  File
} from 'lucide-vue-next'

/* ======================================
SEO (Title + OG + Twitter + JSON-LD)
====================================== */
useHead({
  title: "Preventence Features — Complete Maintenance Intelligence",
  meta: [
    {
      name: "description",
      content:
        "Explore all Preventence features: work orders, preventive maintenance, asset tracking, inventory, checklists, analytics, dashboards, ERP/SAP integrations, and automation."
    },
    { property: "og:title", content: "Preventence — Full Feature Suite" },
    { property: "og:description", content: "Enterprise-grade preventive maintenance platform with 20+ advanced modules." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://preventence.com/features" },
    { property: "og:image", content: "/og-banner.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Preventence Features" },
    { name: "twitter:description", content: "Explore 20+ maintenance, asset, analytics and automation features." },
    { name: "twitter:image", content: "/og-banner.png" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Preventence Features",
        description:
          "Complete list of Preventence capabilities including maintenance automation, asset management, checklists, dashboards, analytics and integrations.",
        url: "https://preventence.com/features",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://preventence.com"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Features",
              item: "https://preventence.com/features"
            }
          ]
        }
      })
    }
  ]
})

/* ======================================
DATA
====================================== */
const search = ref('')
const activeCategory = ref('')

const allFeatures = [
  /* Maintenance Automation */
  {
    title: 'Work Order Management',
    desc: 'Plan, assign, execute and track work orders with precision and full audit visibility.',
    category: 'Maintenance Automation',
    icon: ClipboardList,
    items: [
      'Priority + SLA',
      'Technician assignment',
      'Photos & attachments'
    ]
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Automated recurring schedules that extend equipment life and reduce downtime.',
    category: 'Maintenance Automation',
    icon: CalendarCheck,
    items: ['Recurring rules', 'Templates', 'Part allocation']
  },
  {
    title: 'Ad-hoc Maintenance',
    desc: 'Capture and resolve breakdowns instantly with fast-dispatch workflows.',
    category: 'Maintenance Automation',
    icon: AlertCircle,
    items: ['Quick create', 'Breakdown logs', 'Immediate notifications']
  },
  {
    title: 'Maintenance Checklists',
    desc: 'Digital SOP checklists that ensure consistent execution every time.',
    category: 'Maintenance Automation',
    icon: List,
    items: ['Checkpoints', 'Mandatory steps', 'Half-save']
  },
  {
    title: 'Checkpoint & Checklist Grouping',
    desc: 'Create deep multi-level groups for organized and scalable maintenance plans.',
    category: 'Maintenance Automation',
    icon: Layers,
    items: ['Grouping', 'Templates', 'Mapping']
  },
  {
    title: 'Who Did What (Audit)',
    desc: 'Every action logged with name, time and context for full accountability.',
    category: 'Maintenance Automation',
    icon: UserCheck,
    items: ['Action logs', 'Timestamps', 'Compliance history']
  },
  {
    title: 'Digital SOPs',
    desc: 'Rich SOP documentation linked directly to execution checklists.',
    category: 'Maintenance Automation',
    icon: File,
    items: ['Versioning', 'Mandatory SOPs', 'Linked tasks']
  },

  /* Asset + Resource Management */
  {
    title: 'Asset Management',
    desc: 'Track specs, hierarchy, locations and lifecycle history effortlessly.',
    category: 'Asset & Resource Management',
    icon: Factory,
    items: ['Hierarchy', 'Custom fields', 'Tags']
  },
  {
    title: 'Inventory & Parts Management',
    desc: 'Real-time part stock, reorders and consumption analysis.',
    category: 'Asset & Resource Management',
    icon: Box,
    items: ['Stock levels', 'Reorder rules', 'Consumption logs']
  },
  {
    title: 'User & Role Management',
    desc: 'Teams, roles and structured access control for each module.',
    category: 'Asset & Resource Management',
    icon: Users,
    items: ['Role-based access', 'Teams', 'Permissions']
  },
  {
    title: 'Role-Based Access',
    desc: 'Control who can perform what with precise granular permissions.',
    category: 'Asset & Resource Management',
    icon: Shield,
    items: ['RBAC', 'Rule builder', 'Scoped permissions']
  },
  {
    title: 'Expiration & Warranty Alerts',
    desc: 'Automatic reminders for warranty expiries, calibrations and certificates.',
    category: 'Asset & Resource Management',
    icon: Bell,
    items: ['Expiry reminders', 'Batch alerts', 'Summary lists']
  },
  {
    title: 'Historical Records',
    desc: 'View every maintenance event in a timeline for compliance and RCA.',
    category: 'Asset & Resource Management',
    icon: Clock,
    items: ['Event timeline', 'Root cause', 'Exportable']
  },

  /* Analytics & Visibility */
  {
    title: 'Maintenance Dashboards',
    desc: 'Executive dashboards for uptime, OEE, MTTR and performance KPIs.',
    category: 'Analytics & Visibility',
    icon: BarChart2,
    items: ['KPI widgets', 'Custom dashboards', 'Filters']
  },
  {
    title: 'Live Dashboards',
    desc: 'Instant visibility into active tasks, failures and machine state.',
    category: 'Analytics & Visibility',
    icon: Monitor,
    items: ['Live feed', 'Alerts', 'Machine status']
  },
  {
    title: 'Live Analytics',
    desc: 'Trend analysis and anomaly insights powered by historical + live data.',
    category: 'Analytics & Visibility',
    icon: Activity,
    items: ['Predictive patterns', 'Trend graphs', 'Anomalies']
  },
  {
    title: 'Reports & Exports',
    desc: 'Audit-ready report packs, scheduled emails and export formats.',
    category: 'Analytics & Visibility',
    icon: FileText,
    items: ['PDF/CSV', 'Scheduled reports', 'Compliance packs']
  },

  /* Integrations & Intelligence */
  {
    title: 'ERP Integration',
    desc: 'Sync financials, inventory and work orders directly with ERP platforms.',
    category: 'Integrations & Intelligence',
    icon: Cloud,
    items: ['Two-way sync', 'Cost tracking', 'Material movement']
  },
  {
    title: 'SAP Integration',
    desc: 'SAP ECC + S/4HANA prebuilt connectors for deep operational sync.',
    category: 'Integrations & Intelligence',
    icon: Zap,
    items: ['MM sync', 'Work order push', 'Status sync']
  },
  {
    title: 'Smart Scheduling',
    desc: 'AI-assisted scheduling ensuring right technician + right time.',
    category: 'Integrations & Intelligence',
    icon: Calendar,
    items: ['Skill routing', 'Constraints', 'Auto-schedule']
  }
]

const categories = Array.from(new Set(allFeatures.map(f => f.category)))

const filteredFeatures = computed(() => {
  const q = search.value.trim().toLowerCase()
  return allFeatures.filter(f => {
    if (activeCategory.value && f.category !== activeCategory.value) return false
    if (!q) return true
    return (
      f.title.toLowerCase().includes(q) ||
      f.desc.toLowerCase().includes(q) ||
      (f.items && f.items.join(' ').toLowerCase().includes(q))
    )
  })
})
</script>

<style scoped>
/* Smooth fade animation */
.fade-up {
  opacity: 0;
  transform: translateY(12px);
  transition: all 0.4s ease-out;
}
</style>
