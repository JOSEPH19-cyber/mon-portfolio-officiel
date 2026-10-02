<script setup>
import { ref, reactive } from 'vue'
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import portfolio from '@/data/portfolio'
import * as simpleIcons from 'simple-icons'
import LinkedInIcon from '@/assets/icons/linkedin.svg'

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
// CONFIGURATION WEB3FORMS
// --------------------------------------------
const WEB3FORMS_ACCESS_KEY = '67449e59-98d0-4fcb-b9ed-71189ba48b32'

// --------------------------------------------
// ÉTAT DU FORMULAIRE
// --------------------------------------------
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const status = ref('idle')
const errorMessage = ref('')

const subjectOptions = [
  { value: '', label: 'Choisir un sujet' },
  { value: 'Freelance', label: 'Mission freelance' },
  { value: 'Stage', label: 'Opportunité de stage' },
  { value: 'Collaboration', label: 'Proposition de collaboration' },
  { value: 'Autre', label: 'Autre' },
]

// --------------------------------------------
// SOUMISSION DU FORMULAIRE
// --------------------------------------------
const submitForm = async () => {
  status.value = 'loading'
  errorMessage.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: form.name,
        email: form.email,
        subject: `[Portfolio] ${form.subject || 'Nouveau message'}`,
        message: form.message,
        from_name: 'Portfolio Joseph MBIKI',
      }),
    })

    const data = await response.json()

    if (data.success) {
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      setTimeout(() => {
        status.value = 'idle'
      }, 5000)
    } else {
      status.value = 'error'
      errorMessage.value = data.message || 'Une erreur est survenue.'
    }
  } catch (error) {
    console.error('Erreur:', error)
    status.value = 'error'
    errorMessage.value = 'Impossible d\'envoyer le message. Vérifie ta connexion.'
  }
}

// --------------------------------------------
// CARTES SOCIALES
// source : 'simple' (Simple Icons) | 'hero' (Heroicons) | 'svg' (SVG local)
// --------------------------------------------
const socialCards = [
  {
    name: 'LinkedIn',
    url: portfolio.socials.linkedin,
    source: 'svg',
    component: LinkedInIcon,
    subtitle: 'Voir mon profil',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'hover:border-blue-500/40',
    text: 'group-hover:text-blue-400',
  },
  {
    name: 'GitHub',
    url: portfolio.socials.github,
    source: 'simple',
    icon: siGithub,
    subtitle: 'Voir mes repos',
    color: 'from-slate-500/20 to-slate-600/10',
    border: 'hover:border-slate-400/40',
    text: 'group-hover:text-white',
  },
  {
    name: 'WhatsApp',
    url: portfolio.socials.whatsapp,
    source: 'simple',
    icon: siWhatsapp,
    subtitle: 'Discuter en direct',
    color: 'from-green-500/20 to-green-600/10',
    border: 'hover:border-green-500/40',
    text: 'group-hover:text-green-400',
  },
  {
    name: 'Email',
    url: portfolio.socials.email,
    source: 'hero',
    component: EnvelopeIcon,
    subtitle: portfolio.identity.email,
    color: 'from-primary-500/20 to-accent-500/10',
    border: 'hover:border-primary-500/40',
    text: 'group-hover:text-primary-400',
  },
]
</script>

<template>
  <section id="contact" class="relative py-24 md:py-32 px-6">
    <div class="max-w-7xl mx-auto">

      <SectionTitle
        label="Contact"
        title="Travaillons"
        highlight="ensemble"
        subtitle="Une idée, un projet ou une simple question ? Écris-moi, je réponds rapidement."
      />

      <div class="grid lg:grid-cols-5 gap-6 md:gap-8">

        <!-- FORMULAIRE -->
        <GlassCard :reveal="true" padding="p-6 md:p-8" class="lg:col-span-3">
          <form @submit.prevent="submitForm" class="space-y-5">

            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label for="name" class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ton nom complet"
                  class="w-full px-4 py-3 rounded-xl
                         bg-white/5 border border-white/10
                         text-slate-100 placeholder-slate-500
                         focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07]
                         transition-all duration-300"
                />
              </div>

              <div>
                <label for="email" class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="ton@email.com"
                  class="w-full px-4 py-3 rounded-xl
                         bg-white/5 border border-white/10
                         text-slate-100 placeholder-slate-500
                         focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07]
                         transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Sujet
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 rounded-xl
                       bg-white/5 border border-white/10
                       text-slate-100
                       focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07]
                       transition-all duration-300
                       appearance-none cursor-pointer"
              >
                <option
                  v-for="option in subjectOptions"
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.value === ''"
                  class="bg-dark-surface text-slate-100"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                placeholder="Décris-moi ton projet ou ta question..."
                class="w-full px-4 py-3 rounded-xl
                       bg-white/5 border border-white/10
                       text-slate-100 placeholder-slate-500
                       focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07]
                       transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="status === 'loading'"
              class="group w-full inline-flex items-center justify-center gap-2
                     px-6 py-4 rounded-xl
                     bg-gradient-to-r from-primary-500 to-accent-500
                     text-white font-semibold
                     shadow-lg shadow-primary-500/30
                     hover:shadow-xl hover:shadow-primary-500/50
                     hover:-translate-y-0.5
                     transition-all duration-300
                     disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <template v-if="status === 'loading'">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Envoi en cours...</span>
              </template>

              <template v-else-if="status === 'success'">
                <CheckCircleIcon class="w-5 h-5" />
                <span>Message envoyé !</span>
              </template>

              <template v-else>
                <PaperAirplaneIcon class="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Envoyer le message</span>
              </template>
            </button>

            <div
              v-if="status === 'success'"
              class="flex items-start gap-3 p-4 rounded-xl
                     bg-green-500/10 border border-green-500/30"
            >
              <CheckCircleIcon class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p class="text-sm font-medium text-green-400">Message envoyé avec succès !</p>
                <p class="text-xs text-green-400/70 mt-1">Je te répondrai dans les plus brefs délais.</p>
              </div>
            </div>

            <div
              v-if="status === 'error'"
              class="flex items-start gap-3 p-4 rounded-xl
                     bg-red-500/10 border border-red-500/30"
            >
              <ExclamationCircleIcon class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p class="text-sm font-medium text-red-400">Erreur d'envoi</p>
                <p class="text-xs text-red-400/70 mt-1">{{ errorMessage }}</p>
              </div>
            </div>
          </form>
        </GlassCard>

        <!-- CARTES SOCIALES -->
        <div class="lg:col-span-2 space-y-4">

          <div class="reveal">
            <h3 class="font-display text-xl font-bold text-white mb-1">
              Mes réseaux
            </h3>
            <p class="text-sm text-slate-400">
              Retrouve-moi sur ces plateformes.
            </p>
          </div>

          <a
            v-for="(social, index) in socialCards"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="reveal group flex items-center gap-4 p-4 rounded-2xl
                   glass
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:shadow-lg hover:shadow-primary-500/5"
            :class="social.border"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <!-- Icône -->
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                     bg-gradient-to-br border border-white/10
                     text-slate-200
                     group-hover:scale-110 transition-all duration-300"
              :class="[social.color, social.text]"
            >
              <!-- Simple Icons (GitHub, WhatsApp) -->
              <svg
                v-if="social.source === 'simple' && social.icon && social.icon.path"
                viewBox="0 0 24 24"
                class="w-6 h-6 fill-current"
                aria-hidden="true"
              >
                <path :d="social.icon.path" />
              </svg>

              <!-- SVG local (LinkedIn) -->
              <component
                v-else-if="social.source === 'svg' && social.component"
                :is="social.component"
                class="w-6 h-6 fill-current"
              />

              <!-- Heroicons (Email) -->
              <component
                v-else-if="social.source === 'hero' && social.component"
                :is="social.component"
                class="w-6 h-6"
              />
            </div>

            <!-- Texte -->
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-sm text-slate-200 transition-colors">
                {{ social.name }}
              </p>
              <p class="text-xs text-slate-500 truncate">
                {{ social.subtitle }}
              </p>
            </div>

            <!-- Flèche -->
            <ArrowTopRightOnSquareIcon
              class="w-4 h-4 text-slate-500 flex-shrink-0
                     group-hover:text-primary-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                     transition-all duration-300"
            />
          </a>

          <!-- Badge dispo -->
          <GlassCard :reveal="true" padding="p-4" class="!bg-gradient-to-br !from-green-500/5 !to-primary-500/5">
            <div class="flex items-center gap-3">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p class="text-xs text-slate-300">
                <span class="font-semibold text-green-400">Disponible</span> pour de nouveaux projets
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
select option:disabled {
  color: #64748b;
}
</style>