<template>
  <div class="min-h-screen bg-white text-slate-800">

    <!-- =============================
    HERO — Premium Gradient Header
    ============================== -->
    <section
      class="bg-gradient-to-br from-[#07416B] via-[#1297E0] to-[#07416B] text-white py-20 relative overflow-hidden">

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

        <FeatureFilter
          :categories="categories"
          :activeCategory="activeCategory"
          :search="search"
          @update:category="val => activeCategory = val === 'All' ? '' : val"
          @update:search="val => search = val"
        />

        <div v-if="!search && !activeCategory" class="mt-10 mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
            All Features ({{ filteredFeatures.length }})
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <AnimatedSection
            v-for="(f, i) in filteredFeatures"
            :key="f.title"
            :delay="i * 50"
          >
            <FeatureCard
              :icon="f.icon"
              :title="f.title"
              :desc="f.desc"
              :items="f.items"
              :theme="f.theme"
            />
          </AnimatedSection>
        </div>

        <div v-if="filteredFeatures.length === 0"
             class="text-center py-20 text-slate-500 text-lg">
          No matching features found. Try a different keyword or filter.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
SEO (kept + enhanced)
====================================== */
useHead({
  title: "Preventence Features — Complete Maintenance Intelligence",
  meta: [
    {
      name: "description",
      content:
        "Explore all Preventence features: work orders, preventive maintenance, asset tracking, inventory, checklists, analytics, dashboards, ERP/SAP integrations, automation and more."
    },
    { name: "keywords",
      content: "preventive maintenance software, cmms features, work order management, asset management, inventory, dashboards, analytics, ERP integration, SAP integration, smart scheduling"
    },
    { property: "og:title", content: "Preventence — Full Feature Suite" },
    { property: "og:description", content: "Advanced preventive maintenance platform with 20+ powerful features." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://preventence.com/features" },
    { property: "og:image", content: "/og-banner.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Preventence Features" },
    { name: "twitter:description", content: "Explore maintenance, asset, analytics and automation features." },
    { name: "twitter:image", content: "/og-banner.png" }
  ],
  link: [
    { rel: "canonical", href: "https://preventence.com/features" }
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
State
====================================== */
const search = ref('')
const activeCategory = ref('')

/* ======================================
FEATURE DATA — WITH THEME COLORS
====================================== */
const allFeatures = [

  // =====================
  // MAINTENANCE AUTOMATION (BLUE)
  // =====================
  {
    title: 'Work Order Management',
    desc: 'Plan, assign and track work orders with full audit visibility.',
    category: 'Maintenance Automation',
    icon: ClipboardList,
    items: ['Priority + SLA', 'Photos & attachments', 'Technician logs'],
    theme: 'blue'
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Recurring schedules to extend asset life and reduce failures.',
    category: 'Maintenance Automation',
    icon: CalendarCheck,
    items: ['PM cycles', 'Templates', 'Parts allocation'],
    theme: 'blue'
  },
  {
    title: 'Ad-hoc Maintenance',
    desc: 'Instant breakdown logging and technician dispatch.',
    category: 'Maintenance Automation',
    icon: AlertCircle,
    items: ['Breakdown logs', 'Fast assignment', 'Immediate alerts'],
    theme: 'blue'
  },
  {
    title: 'Maintenance Checklists',
    desc: 'Digital SOPs + multi-field checkpoints for consistent workflows.',
    category: 'Maintenance Automation',
    icon: List,
    items: ['Validations', 'Half-save', 'Flexible field types'],
    theme: 'blue'
  },
  {
    title: 'Checkpoint & Checklist Grouping',
    desc: 'Organize checkpoints → checklists → checklist groups.',
    category: 'Maintenance Automation',
    icon: Layers,
    items: ['Hierarchy', 'Templates', 'Reuse'],
    theme: 'blue'
  },
  {
    title: 'Who Did What (Audit)',
    desc: 'Every action logged with name, timestamp and signature.',
    category: 'Maintenance Automation',
    icon: UserCheck,
    items: ['Timestamps', 'User history', 'Compliance logs'],
    theme: 'blue'
  },
  {
    title: 'Digital SOPs',
    desc: 'Versioned SOPs linked directly to execution steps.',
    category: 'Maintenance Automation',
    icon: File,
    items: ['Versions', 'Mandatory SOPs', 'Linked tasks'],
    theme: 'blue'
  },

  // =============================
  // ASSET & RESOURCE MANAGEMENT (GREEN)
  // =============================
  {
    title: 'Asset Management',
    desc: 'Track asset specs, hierarchy, location and lifecycle data.',
    category: 'Asset & Resource Management',
    icon: Factory,
    items: ['Location tree', 'Custom tags', 'Lifecycle logs'],
    theme: 'green'
  },
  {
    title: 'Inventory & Parts Management',
    desc: 'Manage spare parts, consumption and stock levels.',
    category: 'Asset & Resource Management',
    icon: Box,
    items: ['Stock tracking', 'Reorder rules', 'Consumption history'],
    theme: 'green'
  },
  {
    title: 'User & Role Management',
    desc: 'Manage users, teams and granular permissions.',
    category: 'Asset & Resource Management',
    icon: Users,
    items: ['Roles', 'Teams', 'Module access'],
    theme: 'green'
  },
  {
    title: 'Role-Based Access',
    desc: 'Fine-grained control over every module and function.',
    category: 'Asset & Resource Management',
    icon: Shield,
    items: ['RBAC', 'Supervisor rules', 'Permission matrix'],
    theme: 'green'
  },
  {
    title: 'Expiration & Warranty Alerts',
    desc: 'Get alerts for warranties, calibrations and certificates.',
    category: 'Asset & Resource Management',
    icon: Bell,
    items: ['Reminders', 'Calendar view', 'Batch alerts'],
    theme: 'green'
  },
  {
    title: 'Historical Records',
    desc: 'Complete searchable maintenance timeline per asset.',
    category: 'Asset & Resource Management',
    icon: Clock,
    items: ['Event timeline', 'Exports', 'RCA'],
    theme: 'green'
  },

  // =============================
  // ANALYTICS & VISIBILITY (AMBER)
  // =============================
  {
    title: 'Maintenance Dashboards',
    desc: 'KPI dashboards for OEE, MTTR, uptime and performance.',
    category: 'Analytics & Visibility',
    icon: BarChart2,
    items: ['OEE', 'Uptime', 'Performance widgets'],
    theme: 'amber'
  },
  {
    title: 'Live Dashboards',
    desc: 'Real-time visibility into machines, tasks and alerts.',
    category: 'Analytics & Visibility',
    icon: Monitor,
    items: ['Live feed', 'Running tasks', 'Active failures'],
    theme: 'amber'
  },
  {
    title: 'Live Analytics',
    desc: 'Trend, anomaly and predictive insight analysis.',
    category: 'Analytics & Visibility',
    icon: Activity,
    items: ['Trends', 'Anomalies', 'Prediction'],
    theme: 'amber'
  },
  {
    title: 'Reports & Exports',
    desc: 'Customizable reports, export formats and scheduled emails.',
    category: 'Analytics & Visibility',
    icon: FileText,
    items: ['PDF/CSV', 'Scheduled reports', 'Compliance packs'],
    theme: 'amber'
  },

  // =============================
  // INTEGRATIONS & INTELLIGENCE (PURPLE)
  // =============================
  {
    title: 'ERP Integration',
    desc: 'Sync financials, materials & work orders with ERP platforms.',
    category: 'Integrations & Intelligence',
    icon: Cloud,
    items: ['BOM sync', 'Cost sync', 'Work order exchange'],
    theme: 'purple'
  },
  {
    title: 'SAP Integration',
    desc: 'Ready connectors for SAP ECC + S/4HANA.',
    category: 'Integrations & Intelligence',
    icon: Zap,
    items: ['MM sync', 'Work order push', 'Status updates'],
    theme: 'purple'
  },
  {
    title: 'Smart Scheduling',
    desc: 'AI-assisted scheduling for optimal technician allocation.',
    category: 'Integrations & Intelligence',
    icon: Calendar,
    items: ['Skill matching', 'Constraints', 'Auto-reschedule'],
    theme: 'purple'
  }
]

/* ======================================
CATEGORY LIST
====================================== */
const categories = Array.from(new Set(allFeatures.map(f => f.category)))

/* ======================================
FILTER LOGIC
====================================== */
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
