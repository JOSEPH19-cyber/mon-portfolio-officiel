<script setup>
import {
  CodeBracketIcon,
  Squares2X2Icon,
  CircleStackIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/vue/24/outline'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import portfolio from '@/data/portfolio'

// Import des icônes Devicon
import Html5OriginalIcon from '@devicon/vue/html5/original'
import Css3OriginalIcon from '@devicon/vue/css3/original'
import JavascriptOriginalIcon from '@devicon/vue/javascript/original'
import PythonOriginalIcon from '@devicon/vue/python/original'
import PhpOriginalIcon from '@devicon/vue/php/original'
import VuejsOriginalIcon from '@devicon/vue/vuejs/original'
import LaravelOriginalIcon from '@devicon/vue/laravel/original'
import TailwindcssOriginalIcon from '@devicon/vue/tailwindcss/original'
import MysqlOriginalIcon from '@devicon/vue/mysql/original'
import GitOriginalIcon from '@devicon/vue/git/original'
import GithubOriginalIcon from '@devicon/vue/github/original'

// Mapping nom technique → composant
const iconComponents = {
  html5: Html5OriginalIcon,
  css3: Css3OriginalIcon,
  javascript: JavascriptOriginalIcon,
  python: PythonOriginalIcon,
  php: PhpOriginalIcon,
  vuejs: VuejsOriginalIcon,
  laravel: LaravelOriginalIcon,
  tailwindcss: TailwindcssOriginalIcon,
  mysql: MysqlOriginalIcon,
  git: GitOriginalIcon,
  github: GithubOriginalIcon,
}

// Mapping icônes Heroicons pour les catégories
const categoryIcons = {
  code: CodeBracketIcon,
  layers: Squares2X2Icon,
  database: CircleStackIcon,
  chart: ChartBarIcon,
  wrench: WrenchScrewdriverIcon,
}
</script>

<template>
  <section id="skills" class="relative py-24 md:py-32 px-6">
    <div class="max-w-7xl mx-auto">

      <!-- ============================================ -->
      <!-- TITRE DE SECTION                             -->
      <!-- ============================================ -->
      <SectionTitle
        label="Compétences"
        title="Mes"
        highlight="technologies"
        subtitle="Les outils et langages que j'utilise pour construire des solutions modernes."
      />

      <!-- ============================================ -->
      <!-- GRILLE DES CATÉGORIES                        -->
      <!-- ============================================ -->
      <div class="space-y-6">
        <GlassCard
          v-for="category in portfolio.skills"
          :key="category.category"
          :reveal="true"
          padding="p-6 md:p-8"
        >
          <!-- ============================================ -->
          <!-- Header de catégorie                          -->
          <!-- ============================================ -->
          <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-6">
            <!-- Icône + Titre -->
            <div class="flex items-center gap-3 min-w-0 md:flex-1">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                <component :is="categoryIcons[category.icon]" class="w-5 h-5 text-primary-400" />
              </div>
              <h3 class="font-display text-lg md:text-xl font-bold text-white">
                {{ category.category }}
              </h3>
            </div>

            <!-- Compteur (aligné sous le titre sur mobile grâce à pl-13) -->
            <span class="text-xs text-slate-500 font-medium whitespace-nowrap
                         pl-13 md:pl-0 md:ml-auto">
              {{ category.items.length }} {{ category.items.length > 1 ? 'technos' : 'techno' }}
            </span>
          </div>

          <!-- Badges des technos -->
          <div class="flex flex-wrap gap-3">
            <div
              v-for="skill in category.items"
              :key="skill.name"
              class="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                     bg-white/[0.03] border border-white/10
                     hover:border-primary-500/40 hover:bg-primary-500/5
                     hover:-translate-y-0.5
                     transition-all duration-300 cursor-default"
            >
              <component
                :is="iconComponents[skill.icon]"
                v-if="iconComponents[skill.icon]"
                class="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              />
              <div
                v-else
                class="w-6 h-6 flex-shrink-0 rounded-md bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center"
              >
                <span class="text-[10px] font-bold text-primary-400">{{ skill.name[0] }}</span>
              </div>

              <span class="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>