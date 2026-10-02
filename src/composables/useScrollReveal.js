// ============================================
// COMPOSABLE — SCROLL REVEAL
// ============================================

import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  let observer = null

  const defaultOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
    once: true, 
  }

  const config = { ...defaultOptions, ...options }

  const observeElements = () => {
    // Sélectionne tous les éléments avec la classe .reveal
    const elements = document.querySelectorAll('.reveal:not(.active)')

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')

          // Si "once" est true, on arrête d'observer cet élément
          if (config.once) {
            observer.unobserve(entry.target)
          }
        } else if (!config.once) {
          entry.target.classList.remove('active')
        }
      })
    }, config)

    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // Petit délai pour laisser le DOM se charger complètement
    setTimeout(observeElements, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    // Fonction pour réobserver si de nouveaux éléments sont ajoutés dynamiquement
    refresh: observeElements,
  }
}