<script setup>
import {
  AcademicCapIcon,
  TrophyIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import portfolio from '@/data/portfolio'

// Mapping des icônes pour chaque catégorie
const categoryIcons = {
  academic: AcademicCapIcon,
  badge: TrophyIcon,
  briefcase: BriefcaseIcon,
}

// Configuration des couleurs par catégorie
const categoryColors = {
  primary: {
    icon: 'text-primary-400',
    iconBg: 'bg-primary-500/10',
    iconBorder: 'border-primary-500/30',
    dot: 'bg-primary-500',
    dotGlow: 'shadow-primary-500/50',
    line: 'from-primary-500/60',
    lineTo: 'to-primary-500/10',
  },
  accent: {
    icon: 'text-accent-400',
    iconBg: 'bg-accent-500/10',
    iconBorder: 'border-accent-500/30',
    dot: 'bg-accent-500',
    dotGlow: 'shadow-accent-500/50',
    line: 'from-accent-500/60',
    lineTo: 'to-accent-500/10',
  },
  green: {
    icon: 'text-green-400',
    iconBg: 'bg-green-500/10',
    iconBorder: 'border-green-500/30',
    dot: 'bg-green-500',
    dotGlow: 'shadow-green-500/50',
    line: 'from-green-500/60',
    lineTo: 'to-green-500/10',
  },
}

// Convertit l'objet timeline en tableau pour itérer proprement
const categories = Object.values(portfolio.timeline)
</script>

<template>
  <section id="timeline" class="relative py-24 md:py-32 px-6">
    <div class="max-w-5xl mx-auto">

      <!-- ============================================ -->
      <!-- TITRE DE SECTION                             -->
      <!-- ============================================ -->
      <SectionTitle
        label="Parcours"
        title="Mon"
        highlight="parcours"
        subtitle="Formation, certifications et expériences qui construisent mon profil."
      />

      <!-- ============================================ -->
      <!-- 3 CARTES PAR CATÉGORIE                       -->
      <!-- ============================================ -->
      <div class="grid lg:grid-cols-3 gap-6">
        <GlassCard
          v-for="(category, catIndex) in categories"
          :key="category.title"
          :reveal="true"
          padding="p-6 md:p-7"
          class="h-full"
          :style="{ transitionDelay: `${catIndex * 100}ms` }"
        >
          <!-- ============================================ -->
          <!-- EN-TÊTE DE CARTE                             -->
          <!-- ============================================ -->
          <div class="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0"
              :class="[
                categoryColors[category.color].iconBg,
                categoryColors[category.color].iconBorder,
              ]"
            >
              <component
                :is="categoryIcons[category.icon]"
                class="w-5 h-5"
                :class="categoryColors[category.color].icon"
              />
            </div>
            <div class="min-w-0">
              <h3 class="font-display text-lg font-bold text-white">
                {{ category.title }}
              </h3>
              <p class="text-xs text-slate-500 truncate">{{ category.institution }}</p>
            </div>
          </div>

          <!-- ============================================ -->
          <!-- MINI-TIMELINE INTERNE                        -->
          <!-- ============================================ -->
          <div class="relative">
            <!-- Ligne verticale en arrière-plan -->
            <div
              v-if="category.items.length > 1"
              class="absolute left-[5px] top-3 bottom-3 w-px"
              :class="`bg-gradient-to-b ${categoryColors[category.color].line} ${categoryColors[category.color].lineTo}`"
            ></div>

            <!-- Items de la catégorie -->
            <div class="space-y-6">
              <div
                v-for="(item, index) in category.items"
                :key="index"
                class="relative flex gap-4 pl-0"
              >
                <!-- Point lumineux -->
                <div class="relative flex-shrink-0 mt-1.5">
                  <!-- Halo de glow -->
                  <div
                    class="absolute inset-0 rounded-full blur-md opacity-60"
                    :class="categoryColors[category.color].dot"
                  ></div>

                  <!-- Point -->
                  <div
                    class="relative w-2.5 h-2.5 rounded-full shadow-lg"
                    :class="[
                      categoryColors[category.color].dot,
                      categoryColors[category.color].dotGlow,
                      item.upcoming ? 'animate-pulse' : '',
                    ]"
                  ></div>
                </div>

                <!-- Contenu de l'item -->
                <div class="flex-1 min-w-0">
                  <!-- Titre + Année -->
                  <div class="flex items-baseline justify-between gap-2 mb-1 flex-wrap">
                    <h4
                      class="font-semibold text-sm text-white uppercase tracking-wider"
                      :class="item.upcoming ? 'opacity-60' : ''"
                    >
                      {{ item.title }}
                    </h4>
                    <span
                      class="text-xs font-medium whitespace-nowrap"
                      :class="categoryColors[category.color].icon"
                    >
                      {{ item.period }}
                    </span>
                  </div>

                  <!-- Description -->
                  <p
                    class="text-xs text-slate-400 leading-relaxed"
                    :class="item.upcoming ? 'opacity-60' : ''"
                  >
                    {{ item.description }}
                  </p>

                  <!-- ✨ Lien vers le certificat PDF -->
                  <a
                    v-if="item.pdfLink"
                    :href="item.pdfLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 mt-3 text-xs font-medium
                           transition-all duration-300 group cursor-pointer"
                    :class="categoryColors[category.color].icon"
                  >
                    <DocumentTextIcon class="w-3.5 h-3.5" />
                    <span>Voir le certificat</span>
                    <ArrowRightIcon class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <!-- Badge "À venir" -->
                  <span
                    v-if="item.upcoming"
                    class="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-full
                           bg-green-500/10 border border-green-500/20"
                  >
                    <span class="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span>
                    <span class="text-[9px] font-semibold text-green-400 uppercase tracking-wider">
                      À venir
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>