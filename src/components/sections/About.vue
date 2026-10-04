<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  EnvelopeIcon,
  MapPinIcon,
  UserIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  StarIcon,
  TrophyIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import { useCountUp } from '@/composables/useCountUp'
import portfolio from '@/data/portfolio'

// --------------------------------------------
// STATS
// --------------------------------------------
const stats = portfolio.getStats()

const statIcons = {
  rocket: RocketLaunchIcon,
  star: StarIcon,
  badge: TrophyIcon,
  wrench: WrenchScrewdriverIcon,
}

// --------------------------------------------
// COUNT-UP
// --------------------------------------------
const counters = stats.map((stat) => useCountUp(stat.value, { duration: 1800 }))
const statsContainer = ref(null)

onMounted(() => {
  const cards = statsContainer.value?.querySelectorAll('[data-stat-card]')
  if (cards && cards.length === counters.length) {
    cards.forEach((card, i) => {
      counters[i].startObserver(card)
    })
  }
})

// --------------------------------------------
// SCROLL VERS UNE SECTION
// --------------------------------------------
const scrollToSection = (target) => {
  const el = document.querySelector(target)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section id="about" class="relative py-24 md:py-32 px-6">
    <div class="max-w-7xl mx-auto">

      <SectionTitle
        label="À propos"
        title="Qui suis-je"
        highlight="?"
        subtitle="Découvrez mon parcours et ma passion pour le code et la data."
      />

      <!-- ============================================ -->
      <!-- GRILLE : BIO + CARTE INFOS                  -->
      <!-- ============================================ -->
      <div class="grid lg:grid-cols-2 gap-8 mb-16">

        <!-- Colonne gauche : BIO -->
        <GlassCard :reveal="true" padding="p-8 md:p-10" class="h-full">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-1 h-8 rounded-full bg-gradient-to-b from-primary-500 to-accent-500"></span>
            <h3 class="font-display text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Mon histoire
            </h3>
          </div>

          <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
            {{ portfolio.bio.long }}
          </p>

          <p class="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-2 border-primary-500/30 pl-4">
            {{ portfolio.bio.quote }}
          </p>

          <!-- Langues -->
          <div class="flex items-center gap-3 mt-8 pt-6 border-t border-slate-900/5 dark:border-white/5">
            <GlobeAltIcon class="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
            <div class="flex flex-wrap gap-2">
              <span
                v-for="lang in portfolio.identity.languages"
                :key="lang"
                class="text-xs px-3 py-1 rounded-full
                       bg-slate-900/5 dark:bg-white/5
                       border border-slate-900/10 dark:border-white/10
                       text-slate-700 dark:text-slate-300"
              >
                {{ lang }}
              </span>
            </div>
          </div>
        </GlassCard>

        <!-- Colonne droite : CARTE INFOS -->
        <GlassCard :reveal="true" padding="p-8 md:p-10" class="h-full">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-1 h-8 rounded-full bg-gradient-to-b from-accent-500 to-primary-500"></span>
            <h3 class="font-display text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Informations
            </h3>
          </div>

          <ul class="space-y-1">
            <!-- Nom -->
            <li class="flex items-center gap-4 py-4 border-b border-slate-900/5 dark:border-white/5">
              <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                <UserIcon class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Nom</p>
                <p class="text-sm text-slate-800 dark:text-slate-200 font-medium truncate">{{ portfolio.identity.fullName }}</p>
              </div>
            </li>

            <!-- Email -->
            <li class="flex items-center gap-4 py-4 border-b border-slate-900/5 dark:border-white/5">
              <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                <EnvelopeIcon class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                <a
                  :href="portfolio.socials.email"
                  class="text-sm text-slate-800 dark:text-slate-200 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate block"
                >
                  {{ portfolio.identity.email }}
                </a>
              </div>
            </li>

            <!-- Localisation -->
            <li class="flex items-center gap-4 py-4 border-b border-slate-900/5 dark:border-white/5">
              <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                <MapPinIcon class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Localisation</p>
                <p class="text-sm text-slate-800 dark:text-slate-200 font-medium truncate">{{ portfolio.identity.location }}</p>
              </div>
            </li>

            <!-- Disponibilité -->
            <li class="flex items-center gap-4 py-4">
              <div class="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon class="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Disponibilité</p>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse"></span>
                  <p class="text-sm text-slate-800 dark:text-slate-200 font-medium truncate">{{ portfolio.identity.availability }}</p>
                </div>
              </div>
            </li>
          </ul>
        </GlassCard>
      </div>

      <!-- ============================================ -->
      <!-- STATS DYNAMIQUES                             -->
      <!-- ============================================ -->
      <div ref="statsContainer" class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <button
          v-for="(stat, index) in stats"
          :key="stat.label"
          data-stat-card
          @click="scrollToSection(stat.target)"
          class="glass rounded-2xl p-6 md:p-8 text-center cursor-pointer group
                 transition-all duration-300
                 hover:-translate-y-2
                 hover:border-primary-500/40
                 hover:shadow-xl hover:shadow-primary-500/10"
        >
          <!-- Icône -->
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <component :is="statIcons[stat.icon]" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>

          <!-- Valeur animée -->
          <div class="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
            {{ counters[index].current.value }}<span v-if="index === 3">+</span>
          </div>

          <!-- Label -->
          <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
            {{ stat.label }}
          </p>

          <!-- Petit indicateur "Voir" -->
          <div class="flex items-center justify-center gap-1 mt-3 text-xs text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Voir</span>
            <ArrowRightIcon class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  </section>
</template>