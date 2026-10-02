<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import * as simpleIcons from 'simple-icons'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import portfolio from '@/data/portfolio'

// --------------------------------------------
// ANNÉE DYNAMIQUE
// --------------------------------------------
const currentYear = new Date().getFullYear()

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
// RÉSEAUX SOCIAUX
// --------------------------------------------
const socialLinks = [
  {
    name: 'LinkedIn',
    url: portfolio.socials.linkedin,
    source: 'svg',
    component: LinkedInIcon,
  },
  {
    name: 'GitHub',
    url: portfolio.socials.github,
    source: 'simple',
    icon: siGithub,
  },
  {
    name: 'WhatsApp',
    url: portfolio.socials.whatsapp,
    source: 'simple',
    icon: siWhatsapp,
  },
  {
    name: 'Email',
    url: portfolio.socials.email,
    source: 'hero',
    component: EnvelopeIcon,
  },
]

// --------------------------------------------
// SERVICES
// --------------------------------------------
const services = portfolio.services.map((s) => s.title)

// --------------------------------------------
// SCROLL VERS UNE SECTION
// --------------------------------------------
const scrollToSection = (href) => {
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <footer class="relative pt-20 pb-24 md:pb-8 px-6">
    <!-- ============================================ -->
    <!-- LIGNE DE DÉMARCATION RENFORCÉE               -->
    <!-- ============================================ -->
    <div class="absolute top-0 left-0 right-0">
      <!-- Ligne de base (visible sur mobile + desktop) -->
      <div class="h-px w-full bg-white/20"></div>
      <!-- Ligne gradient néon (pleine largeur sur mobile) -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full md:w-1/2
                  bg-gradient-to-r from-transparent via-primary-500/70 to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto">

      <!-- ============================================ -->
      <!-- GRILLE PRINCIPALE                            -->
      <!-- ============================================ -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-14">

        <!-- COLONNE 1 : Logo + Tagline -->
        <div class="lg:col-span-1">
          <a
            href="#hero"
            @click.prevent="scrollToSection('#hero')"
            class="inline-block font-display font-bold text-2xl gradient-text mb-4 cursor-pointer"
          >
            Portfolio.
          </a>
          <p class="text-sm text-slate-400 leading-relaxed max-w-xs">
            {{ portfolio.identity.tagline }}
          </p>
        </div>

        <!-- COLONNE 2 : Navigation -->
        <div>
          <h3 class="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
            Navigation
          </h3>
          <ul class="space-y-3">
            <li v-for="link in portfolio.navLinks" :key="link.name">
              <a
                :href="link.href"
                @click.prevent="scrollToSection(link.href)"
                class="text-sm text-slate-400 hover:text-primary-400
                       transition-colors duration-300 cursor-pointer
                       inline-flex items-center gap-2 group"
              >
                <span class="w-0 group-hover:w-3 h-px bg-primary-400 transition-all duration-300"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- COLONNE 3 : Services -->
        <div>
          <h3 class="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
            Services
          </h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <span class="text-sm text-slate-400 leading-relaxed block">
                {{ service }}
              </span>
            </li>
          </ul>
        </div>

        <!-- COLONNE 4 : Me contacter -->
        <div>
          <h3 class="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
            Me contacter
          </h3>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="group w-10 h-10 rounded-xl glass flex items-center justify-center
                     text-slate-400 transition-all duration-300
                     hover:scale-110 hover:border-primary-500/40 hover:bg-white/5
                     hover:text-primary-400"
            >
              <!-- Simple Icons -->
              <svg
                v-if="social.source === 'simple' && social.icon && social.icon.path"
                viewBox="0 0 24 24"
                class="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path :d="social.icon.path" />
              </svg>

              <!-- SVG local -->
              <component
                v-else-if="social.source === 'svg' && social.component"
                :is="social.component"
                class="w-4 h-4 fill-current"
              />

              <!-- Heroicons -->
              <component
                v-else-if="social.source === 'hero' && social.component"
                :is="social.component"
                class="w-4 h-4"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- ============================================ -->
      <!-- SÉPARATEUR GRADIENT                          -->
      <!-- ============================================ -->
      <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

      <!-- ============================================ -->
      <!-- COPYRIGHT (3 zones flex-1)                    -->
      <!-- Mobile : empilé (Fait avec, puis Copyright)   -->
      <!-- Desktop : Fait avec (gauche) · Copyright (centre) · vide (droite) -->
      <!-- ============================================ -->
      <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">

        <!-- 1️Fait avec et Vue.js — GAUCHE sur desktop -->
        <p class="flex-1 text-xs md:text-sm text-slate-500
                  flex items-center gap-1.5
                  justify-center md:justify-start">
          Fait avec
          <span class="text-red-400 animate-pulse">❤</span>
          et
          <span class="gradient-text font-semibold">Vue.js</span>
        </p>

        <!-- 2️⃣ Copyright — CENTRE sur desktop -->
        <p class="flex-1 text-xs md:text-sm text-slate-500 text-center">
          © {{ currentYear }}
          <span class="text-slate-400 font-medium">{{ portfolio.identity.fullName }}</span>
          · Tous droits réservés.
        </p>

        <!-- 3️⃣ Zone vide — pour équilibrer (le copyright est vraiment centré) -->
        <div class="hidden md:block flex-1"></div>
      </div>
    </div>
  </footer>
</template>