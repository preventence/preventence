<template>
  <section id="features" class="py-20 bg-white">
    <div class="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Powerful Maintenance Capabilities</h2>
          <p class="text-lg text-slate-600 max-w-3xl mx-auto">
            A complete suite to manage assets, automate maintenance, and deliver measurable uptime improvements.
          </p>
        </div>
      </AnimatedSection>

      <!-- Core -->
      <AnimatedSection>
        <h3 class="text-2xl font-bold text-[#07416B] mb-6 border-l-4 border-[#1297E0] pl-3">Core Maintenance</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard v-for="(f,i) in core" :key="f.title" :icon="f.icon" :title="f.title" :desc="f.desc" :delay="i*80" />
        </div>
      </AnimatedSection>

      <!-- Asset & Resource -->
      <AnimatedSection>
        <h3 class="text-2xl font-bold text-[#07416B] mb-6 border-l-4 border-[#1297E0] pl-3">Asset & Resource Management</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard v-for="(f,i) in asset" :key="f.title" :icon="f.icon" :title="f.title" :desc="f.desc" :delay="i*80" />
        </div>
      </AnimatedSection>

      <!-- Analytics -->
      <AnimatedSection>
        <h3 class="text-2xl font-bold text-[#07416B] mb-6 border-l-4 border-[#1297E0] pl-3">Analytics & Dashboards</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard v-for="(f,i) in analytics" :key="f.title" :icon="f.icon" :title="f.title" :desc="f.desc" :delay="i*80" />
        </div>
      </AnimatedSection>

      <!-- Integrations -->
      <AnimatedSection>
        <h3 class="text-2xl font-bold text-[#07416B] mb-6 border-l-4 border-[#1297E0] pl-3">Integrations & Automation</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard v-for="(f,i) in integrations" :key="f.title" :icon="f.icon" :title="f.title" :desc="f.desc" :delay="i*80" />
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>

<script setup>
/* Imports - pick icons from lucide-vue-next */
import AnimatedSection from '~/components/AnimatedSection.vue'
import FeatureCard from '~/components/FeatureCard.vue'

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

/* Feature arrays with icon components */
const core = [
  { icon: ClipboardList, title: 'Work Order Management', desc: 'Create, assign and monitor work orders with status, priorities and attachments.' },
  { icon: CalendarCheck, title: 'Preventive Maintenance', desc: 'Schedule recurring plans and automations to reduce failures and increase uptime.' },
  { icon: AlertCircle, title: 'Ad-hoc Maintenance', desc: 'Log unplanned breakdowns quickly and dispatch teams with full context.' },
  { icon: List, title: 'Maintenance Checklists', desc: 'Standardized digital checklists and SOPs to ensure consistent work quality.' },
  { icon: Layers, title: 'Checkpoint & Checklist Grouping', desc: 'Organize checkpoints into checklists and group related checklists for SOP clarity.' },
  { icon: UserCheck, title: 'Who Did What', desc: 'Complete audit trail to see who performed each step and when.' },
  { icon: Clock, title: 'Historical Records', desc: 'Searchable maintenance history for analytics, audits and root-cause analysis.' },
]

const asset = [
  { icon: Factory, title: 'Asset Management', desc: 'Single source of truth for assets: hierarchy, location, specs and lifecycle.' },
  { icon: Box, title: 'Inventory & Parts', desc: 'Track spare parts, stock levels and consumption with reorder alerts.' },
  { icon: Users, title: 'User & Role Management', desc: 'Manage users, teams and department-level access with ease.' },
  { icon: Shield, title: 'Role-Based Access', desc: 'Fine-grained permissions to control who can view and edit critical data.' },
  { icon: Bell, title: 'Expiration & Warranty Alerts', desc: 'Automated reminders for warranties, certificates and expiring items.' },
]

const analytics = [
  { icon: BarChart2, title: 'Maintenance Dashboards', desc: 'Executive dashboards with KPIs like OEE, MTTR and uptime.' },
  { icon: Monitor, title: 'Live Dashboards', desc: 'Real-time machine and task monitoring for operational teams.' },
  { icon: Activity, title: 'Live Analytics', desc: 'Streaming and historical analytics to identify failure patterns.' },
  { icon: FileText, title: 'Reports & Exports', desc: 'Generate custom reports for audits, management and compliance.' },
]

const integrations = [
  { icon: Cloud, title: 'ERP Integration', desc: 'Bi-directional sync with ERPs for parts, costs and resource planning.' },
  { icon: Zap, title: 'SAP Integration', desc: 'Pre-built SAP connectors to unify maintenance and enterprise data.' },
  { icon: Calendar, title: 'Smart Scheduling', desc: 'Constraint-aware scheduling that optimizes availability and reduces downtime.' },
  { icon: File, title: 'Digital SOPs', desc: 'Built-in digital SOP authoring and enforcement inside checklists.' },
]
</script>

<style scoped>
/* Scoped tweaks if needed */
</style>
