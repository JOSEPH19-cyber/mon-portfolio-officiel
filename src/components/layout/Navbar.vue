<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '@/composables/useTheme'
import portfolio from '@/data/portfolio'

const { isDark, toggleTheme } = useTheme()

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('#hero')

const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  // Détection de la section active
  const sections = portfolio.navLinks.map((l) => l.href.replace('#', ''))
  const scrollPos = window.scrollY + 120

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const bottom = top + el.offsetHeight
      if (scrollPos >= top && scrollPos < bottom) {
        activeSection.value = `#${section}`
        break
      }
    }
  }
}

const scrollToSection = (href) => {
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3' : 'py-5'"
  >
    <nav
      class="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between rounded-2xl transition-all duration-500"
      :class="scrolled ? 'glass py-3 shadow-lg shadow-primary-500/5 mx-4 md:mx-6' : 'py-2'"
    >
      <!-- Logo -->
      <a
        href="#hero"
        @click.prevent="scrollToSection('#hero')"
        class="font-display font-bold text-xl md:text-2xl gradient-text cursor-pointer"
      >
        Portfolio.
      </a>

      <!-- Liens desktop -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in portfolio.navLinks" :key="link.name">
          <a
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer"
            :class="
              activeSection === link.href
                ? 'text-primary-400 bg-primary-500/10'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            "
          >
            {{ link.name }}

            <!-- Point actif -->
            <span
              v-if="activeSection === link.href"
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400"
            ></span>
          </a>
        </li>
      </ul>

      <!-- Actions à droite -->
      <div class="flex items-center gap-2 md:gap-3">
        <!-- Toggle thème -->
        <button
          @click="toggleTheme"
          aria-label="Changer le thème"
          class="w-10 h-10 rounded-xl glass flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-500/40"
        >
          <SunIcon v-if="isDark" class="w-5 h-5 text-yellow-400" />
          <MoonIcon v-else class="w-5 h-5 text-primary-500" />
        </button>

        <!-- CTA Parlons-en (desktop) -->
        <a
          href="#contact"
          @click.prevent="scrollToSection('#contact')"
          class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                 bg-gradient-to-r from-primary-500 to-accent-500
                 text-white text-sm font-semibold
                 shadow-lg shadow-primary-500/30
                 hover:shadow-xl hover:shadow-primary-500/50
                 hover:-translate-y-0.5
                 transition-all duration-300 cursor-pointer"
        >
          Parlons-en
          <span>→</span>
        </a>

        <!-- Burger mobile -->
        <button
          @click="mobileOpen = !mobileOpen"
          aria-label="Menu"
          class="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center transition-all duration-300"
        >
          <XMarkIcon v-if="mobileOpen" class="w-6 h-6" />
          <Bars3Icon v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden mx-4 mt-3 glass rounded-2xl p-3"
      >
        <a
          v-for="link in portfolio.navLinks"
          :key="link.name"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          class="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
          :class="
            activeSection === link.href
              ? 'text-primary-400 bg-primary-500/10'
              : 'text-slate-300 hover:bg-white/5'
          "
        >
          {{ link.name }}
        </a>

        <!-- CTA mobile -->
        <a
          href="#contact"
          @click.prevent="scrollToSection('#contact')"
          class="mt-2 block px-4 py-3 rounded-xl text-center
                 bg-gradient-to-r from-primary-500 to-accent-500
                 text-white text-sm font-semibold cursor-pointer"
        >
          Parlons-en →
        </a>
      </div>
    </Transition>
  </header>
</template>