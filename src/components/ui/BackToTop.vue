<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpIcon } from '@heroicons/vue/24/outline'

const visible = ref(false)

const handleScroll = () => {
  // Apparaît après 500px de scroll
  visible.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-90"
  >
    <button
      v-if="visible"
      @click="scrollToTop"
      aria-label="Retour en haut"
      class="group fixed bottom-6 right-6 z-50
             w-12 h-12 md:w-14 md:h-14 rounded-full
             glass
             flex items-center justify-center
             transition-all duration-300
             hover:scale-110
             hover:border-primary-500/40
             hover:shadow-lg hover:shadow-primary-500/40
             glow-primary"
    >
      <!-- Halo gradient derrière -->
      <span
        class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
               bg-gradient-to-br from-primary-500/20 to-accent-500/20
               transition-opacity duration-300"
      ></span>

      <!-- Icône -->
      <ArrowUpIcon
        class="relative w-5 h-5 md:w-6 md:h-6 text-primary-400
               transition-transform duration-300
               group-hover:-translate-y-0.5"
      />
    </button>
  </Transition>
</template>