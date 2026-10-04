<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRightIcon, ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import * as simpleIcons from 'simple-icons'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import portfolio from '@/data/portfolio'

// --------------------------------------------
// ICÔNES DEVICON POUR LES BADGES FLOTTANTS
// --------------------------------------------
import VuejsOriginalIcon from '@devicon/vue/vuejs/original'
import PythonOriginalIcon from '@devicon/vue/python/original'
import LaravelOriginalIcon from '@devicon/vue/laravel/original'
import MysqlOriginalIcon from '@devicon/vue/mysql/original'

// --------------------------------------------
// RÉCUPÉRATION DES LOGOS SIMPLE ICONS
// --------------------------------------------
const getIcon = (name) => {
  return (
    simpleIcons[name] ||
    simpleIcons.default?.[name] ||
    simpleIcons.icons?.[name] ||
    null
  )
}

const siGithub = getIcon('siGithub')
const siWhatsapp = getIcon('siWhatsapp')

// --------------------------------------------
// TYPEWRITER
// --------------------------------------------
const typewriterText = ref('')
const currentWordIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
let typewriterTimeout = null

const runTypewriter = () => {
  const words = portfolio.identity.typewriter
  const currentWord = words[currentWordIndex.value]

  if (isDeleting.value) {
    typewriterText.value = currentWord.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--
  } else {
    typewriterText.value = currentWord.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++
  }

  let delay = isDeleting.value ? 40 : 80

  if (!isDeleting.value && currentCharIndex.value === currentWord.length) {
    delay = 2000
    isDeleting.value = true
  } else if (isDeleting.value && currentCharIndex.value === 0) {
    isDeleting.value = false
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length
    delay = 300
  }

  typewriterTimeout = setTimeout(runTypewriter, delay)
}

// --------------------------------------------
// BADGES FLOTTANTS
// --------------------------------------------
const floatingBadges = [
  {
    name: 'Vue.js',
    icon: VuejsOriginalIcon,
    position: 'top-4 -left-4',
    delay: '0s',
  },
  {
    name: 'Python',
    icon: PythonOriginalIcon,
    position: 'bottom-8 -left-6',
    delay: '1s',
  },
  {
    name: 'Laravel',
    icon: LaravelOriginalIcon,
    position: 'top-1/3 -right-4',
    delay: '2s',
  },
  {
    name: 'MySQL',
    icon: MysqlOriginalIcon,
    position: 'bottom-4 -right-2',
    delay: '3s',
  },
]

// --------------------------------------------
// RÉSEAUX SOCIAUX
// --------------------------------------------
const socialLinks = [
  {
    name: 'LinkedIn',
    url: portfolio.socials.linkedin,
    source: 'svg',
    component: LinkedInIcon,
    hoverColor: 'hover:text-[#0A66C2]',
  },
  {
    name: 'GitHub',
    url: portfolio.socials.github,
    source: 'simple',
    icon: siGithub,
    hoverColor: 'hover:text-slate-900 dark:hover:text-white',
  },
  {
    name: 'WhatsApp',
    url: portfolio.socials.whatsapp,
    source: 'simple',
    icon: siWhatsapp,
    hoverColor: 'hover:text-[#25D366]',
  },
  {
    name: 'Email',
    url: portfolio.socials.email,
    source: 'hero',
    component: EnvelopeIcon,
    hoverColor: 'hover:text-primary-600 dark:hover:text-primary-400',
  },
]

// --------------------------------------------
// LIFECYCLE
// --------------------------------------------
onMounted(() => {
  runTypewriter()
})

onUnmounted(() => {
  if (typewriterTimeout) clearTimeout(typewriterTimeout)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center px-6 pt-32 pb-20 lg:pt-24 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      <!-- ============================================ -->
      <!-- COLONNE GAUCHE — TEXTE                       -->
      <!-- ============================================ -->
      <div class="reveal order-2 lg:order-1 text-center lg:text-left">

        <!-- Label "Salut, je suis" -->
        <div class="flex items-center gap-3 mb-6 justify-center lg:justify-start">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-primary-500"></span>
          <span class="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em]">
            Salut, je suis
          </span>
        </div>

        <!-- Nom -->
        <h1 class="font-display text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
          <span class="text-slate-900 dark:text-white">{{ portfolio.identity.firstName }}</span>
          <span class="block lg:inline gradient-text">{{ portfolio.identity.lastName }}</span>
        </h1>

        <!-- Typewriter -->
        <div class="h-10 md:h-12 mb-6 flex items-center justify-center lg:justify-start">
          <span class="font-display text-xl md:text-2xl text-slate-700 dark:text-slate-300">
            &gt; {{ typewriterText }}<span class="inline-block w-0.5 h-6 md:h-7 bg-primary-500 dark:bg-primary-400 ml-1 animate-pulse"></span>
          </span>
        </div>

        <!-- Tagline -->
        <p class="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
          {{ portfolio.identity.tagline }}
        </p>

        <!-- Badge disponibilité -->
        <div class="flex items-center gap-2 mb-8 justify-center lg:justify-start">
          <span class="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse"></span>
          <span class="text-sm text-slate-600 dark:text-slate-400">{{ portfolio.identity.availability }}</span>
        </div>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                   bg-gradient-to-r from-primary-500 to-accent-500
                   text-white font-semibold
                   shadow-lg shadow-primary-500/30
                   hover:shadow-xl hover:shadow-primary-500/50
                   hover:-translate-y-1
                   transition-all duration-300"
          >
            Voir mes projets
            <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            :href="portfolio.meta.cvLink"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                   glass font-semibold text-slate-800 dark:text-slate-100
                   hover:-translate-y-1 hover:border-primary-500/40
                   transition-all duration-300"
          >
            <ArrowDownTrayIcon class="w-5 h-5" />
            Télécharger mon CV
          </a>
        </div>

        <!-- Réseaux sociaux -->
        <div class="flex items-center gap-3 justify-center lg:justify-start">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="group w-11 h-11 rounded-xl glass flex items-center justify-center
                   text-slate-500 dark:text-slate-400 transition-all duration-300
                   hover:scale-110 hover:border-primary-500/40
                   hover:bg-slate-900/5 dark:hover:bg-white/5"
            :class="social.hoverColor"
          >
            <!-- Simple Icons -->
            <svg
              v-if="social.source === 'simple' && social.icon && social.icon.path"
              viewBox="0 0 24 24"
              class="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path :d="social.icon.path" />
            </svg>

            <!-- SVG local -->
            <component
              v-else-if="social.source === 'svg' && social.component"
              :is="social.component"
              class="w-5 h-5 fill-current"
            />

            <!-- Heroicons -->
            <component
              v-else-if="social.source === 'hero' && social.component"
              :is="social.component"
              class="w-5 h-5"
            />
          </a>
        </div>
      </div>

      <!-- ============================================ -->
      <!-- COLONNE DROITE — PHOTO + BADGES              -->
      <!-- ============================================ -->
      <div class="reveal order-1 lg:order-2 flex justify-center lg:justify-end lg:self-center">
        <div class="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">

          <!-- Halo gradient rotatif -->
          <div
            class="absolute inset-0 rounded-full blur-3xl opacity-40 dark:opacity-60 animate-pulse"
            style="background: conic-gradient(from 0deg, #06b6d4, #8b5cf6, #06b6d4);"
          ></div>

          <!-- Cercle glass + photo -->
          <div class="relative w-full h-full rounded-full glass p-3 animate-float">
            <div class="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-dark-surface flex items-center justify-center">
              <img
                :src="portfolio.meta.photo"
                :alt="portfolio.identity.fullName"
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              />
              <div class="hidden w-full h-full items-center justify-center text-7xl">
                👨‍💻
              </div>
            </div>
          </div>

          <!-- Badges flottants -->
          <div
            v-for="badge in floatingBadges"
            :key="badge.name"
            :class="badge.position"
            class="absolute glass px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-medium
                   animate-float shadow-lg shadow-black/30 dark:shadow-black/30"
            :style="{ animationDelay: badge.delay }"
          >
            <component
              :is="badge.icon"
              class="w-4 h-4 flex-shrink-0"
            />
            <span class="text-slate-800 dark:text-slate-200">{{ badge.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicateur de scroll -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
      <span class="text-xs text-slate-500 uppercase tracking-widest">Défiler</span>
      <div class="w-5 h-8 rounded-full border border-slate-400 dark:border-slate-600 flex justify-center pt-1.5">
        <div class="w-1 h-2 rounded-full bg-primary-500 dark:bg-primary-400 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>