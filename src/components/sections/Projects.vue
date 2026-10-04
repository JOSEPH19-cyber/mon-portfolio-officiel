<script setup>
import { ref } from 'vue'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import portfolio from '@/data/portfolio'

// --------------------------------------------
// GESTION DU TAP SUR MOBILE
// --------------------------------------------
const activeProjectIndex = ref(null)

const toggleOverlay = (index) => {
  activeProjectIndex.value = activeProjectIndex.value === index ? null : index
}
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
                 md:hover:-translate-y-2
                 md:hover:border-primary-500/40
                 md:hover:shadow-2xl md:hover:shadow-primary-500/20
                 cursor-pointer md:cursor-default"
          :style="{ transitionDelay: `${index * 100}ms` }"
          @click="toggleOverlay(index)"
        >
          <!-- IMAGE DU PROJET -->
          <div class="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-dark-surface">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-top
                     transition-transform duration-700
                     md:group-hover:scale-110"
              :class="activeProjectIndex === index ? 'scale-110' : ''"
              loading="lazy"
              onerror="this.style.display='none'; this.parentElement.classList.add('bg-gradient-to-br', 'from-primary-500/20', 'to-accent-500/20');"
            />

            <!-- Badge "Voir le site" en haut à droite -->
            <div class="absolute top-4 right-4 z-20">
              <div
                class="w-10 h-10 rounded-xl glass flex items-center justify-center
                       transition-all duration-300
                       md:opacity-0 md:group-hover:opacity-100
                       md:translate-y-2 md:group-hover:translate-y-0"
                :class="activeProjectIndex === index ? 'md:opacity-100 md:translate-y-0' : ''"
              >
                <ArrowTopRightOnSquareIcon class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
            </div>

            <!-- OVERLAY -->
            <div
              class="absolute inset-0 z-10
                     transition-opacity duration-500
                     flex flex-col justify-end p-6 md:p-8
                     bg-gradient-to-t from-white via-white/90 to-transparent
                     dark:from-dark-bg dark:via-dark-bg/80 dark:to-transparent
                     md:opacity-0 md:group-hover:opacity-100"
              :class="activeProjectIndex === index ? 'opacity-100' : 'opacity-0 md:opacity-0'"
            >
              <!-- Contenu overlay -->
              <div
                class="transition-transform duration-500
                       md:translate-y-6 md:group-hover:translate-y-0"
                :class="activeProjectIndex === index ? 'translate-y-0 md:translate-y-0' : 'translate-y-6 md:translate-y-6'"
              >
                <!-- Titre -->
                <h3 class="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  {{ project.title }}
                </h3>

                <!-- Description -->
                <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {{ project.description }}
                </p>

                <!-- Badges stack -->
                <div class="flex flex-wrap gap-2 mb-5">
                  <span
                    v-for="tech in project.stack"
                    :key="tech"
                    class="px-2.5 py-1 rounded-full text-[10px] font-medium
                           bg-primary-500/10 text-primary-600 dark:text-primary-400
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
                  @click.stop
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

          <!-- TITRE SOUS L'IMAGE -->
          <div
            class="p-6 border-t border-slate-900/5 dark:border-white/5 transition-opacity duration-300
                   md:group-hover:opacity-0"
            :class="activeProjectIndex === index ? 'md:opacity-0 opacity-0' : ''"
          >
            <div class="flex items-center justify-between gap-4">
              <h3 class="font-display text-lg font-bold text-slate-900 dark:text-white truncate">
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
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>