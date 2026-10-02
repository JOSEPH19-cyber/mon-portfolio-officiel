<script setup>
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CircleStackIcon,
} from '@heroicons/vue/24/outline'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import portfolio from '@/data/portfolio'

// Mapping des icônes Heroicons pour chaque service
const serviceIcons = {
  code: CodeBracketIcon,
  palette: PaintBrushIcon,
  chart: ChartBarIcon,
  database: CircleStackIcon,
}
</script>

<template>
  <section id="services" class="relative py-24 md:py-32 px-6">
    <div class="max-w-7xl mx-auto">

      <!-- ============================================ -->
      <!-- TITRE DE SECTION                             -->
      <!-- ============================================ -->
      <SectionTitle
        label="Services"
        title="Ce que je"
        highlight="propose"
        subtitle="Des solutions concrètes pour donner vie à vos projets digitaux."
      />

      <!-- ============================================ -->
      <!-- GRILLE DE SERVICES                           -->
      <!-- ============================================ -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        <GlassCard
          v-for="(service, index) in portfolio.services"
          :key="service.title"
          :hover="true"
          :reveal="true"
          padding="p-6 md:p-7"
          class="h-full group"
        >
          <!-- Numéro en arrière-plan (décoratif) -->
          <span class="absolute top-4 right-5 font-display text-5xl md:text-6xl font-bold text-white/[0.04] select-none group-hover:text-primary-500/10 transition-colors duration-500">
            0{{ index + 1 }}
          </span>

          <!-- Icône -->
          <div class="relative mb-6">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-500/15
                        border border-primary-500/20
                        flex items-center justify-center
                        group-hover:scale-110 group-hover:border-primary-500/40
                        transition-all duration-500">
              <component
                :is="serviceIcons[service.icon]"
                class="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors"
              />
            </div>
          </div>

          <!-- Titre -->
          <h3 class="font-display text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-slate-400 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Ligne décorative en bas (apparaît au hover) -->
          <div class="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500"></div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>