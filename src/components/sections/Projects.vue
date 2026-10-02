<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import portfolio from '@/data/portfolio'
</script>

<template>
  <section id="projects" class="relative py-24 md:py-32 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- ============================================ -->
      <!-- TITRE DE SECTION                             -->
      <!-- ============================================ -->
      <SectionTitle
        label="Portfolio"
        title="Mes"
        highlight="réalisations"
        subtitle="Une sélection de projets concrets, en ligne et utilisables."
      />

      <!-- ============================================ -->
      <!-- GRILLE DE PROJETS                            -->
      <!-- ============================================ -->
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(project, index) in portfolio.projects"
          :key="project.title"
          class="reveal group relative rounded-3xl overflow-hidden
                 glass transition-all duration-500
                 hover:-translate-y-2
                 hover:border-primary-500/40
                 hover:shadow-2xl hover:shadow-primary-500/20
                 cursor-default"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- ============================================ -->
          <!-- IMAGE DU PROJET                              -->
          <!-- ============================================ -->
          <div class="relative aspect-[16/10] overflow-hidden bg-dark-surface">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-top
                     transition-transform duration-700
                     group-hover:scale-110"
              loading="lazy"
              onerror="this.style.display='none'; this.parentElement.classList.add('bg-gradient-to-br', 'from-primary-500/20', 'to-accent-500/20');"
            />

            <!-- Badge "Voir le site" en haut à droite -->
            <div class="absolute top-4 right-4 z-20">
              <div class="w-10 h-10 rounded-xl glass flex items-center justify-center
                          opacity-0 group-hover:opacity-100
                          translate-y-2 group-hover:translate-y-0
                          transition-all duration-300">
                <ArrowTopRightOnSquareIcon class="w-5 h-5 text-primary-400" />
              </div>
            </div>

            <!-- ============================================ -->
            <!-- OVERLAY AU HOVER                             -->
            <!-- ============================================ -->
            <div
              class="absolute inset-0 z-10
                     bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-500
                     flex flex-col justify-end p-6 md:p-8"
            >
              <!-- Contenu overlay (slide up au hover) -->
              <div class="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">

                <!-- Titre -->
                <h3 class="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  {{ project.title }}
                </h3>

                <!-- Description -->
                <p class="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {{ project.description }}
                </p>

                <!-- Badges stack -->
                <div class="flex flex-wrap gap-2 mb-5">
                  <span
                    v-for="tech in project.stack"
                    :key="tech"
                    class="px-2.5 py-1 rounded-full text-[10px] font-medium
                           bg-primary-500/10 text-primary-400
                           border border-primary-500/30"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- CTA cliquable -->
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                         text-sm font-semibold
                         bg-gradient-to-r from-primary-500 to-accent-500
                         text-white
                         shadow-lg shadow-primary-500/30
                         hover:shadow-xl hover:shadow-primary-500/50
                         hover:-translate-y-0.5
                         transition-all duration-300 cursor-pointer"
                >
                  <span>Voir le site</span>
                  <ArrowTopRightOnSquareIcon class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <!-- ============================================ -->
          <!-- TITRE VISIBLE PAR DÉFAUT (sous l'image)      -->
          <!-- ============================================ -->
          <div class="p-6 border-t border-white/5 group-hover:opacity-0 transition-opacity duration-300">
            <div class="flex items-center justify-between gap-4">
              <h3 class="font-display text-lg font-bold text-white truncate">
                {{ project.title }}
              </h3>
              <ArrowTopRightOnSquareIcon class="w-4 h-4 text-slate-500 flex-shrink-0" />
            </div>
            <p class="text-xs text-slate-500 mt-1 truncate">
              {{ project.stack.join(' · ') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Limite le texte à 3 lignes dans l'overlay */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>