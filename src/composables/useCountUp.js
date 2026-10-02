// ============================================
// COMPOSABLE — COUNT UP
// ============================================

import { ref, onMounted, onUnmounted } from 'vue'

export function useCountUp(target, options = {}) {
  const current = ref(0)
  const hasAnimated = ref(false)
  let observer = null
  let animationFrame = null

  const config = {
    duration: 1500,      
    threshold: 0.5,      
    suffix: '',         
    ...options,
  }

  // Fonction d'easing (easeOutCubic) pour un rendu naturel
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3)
  }

  const animate = () => {
    const startTime = performance.now()
    const startValue = 0
    const endValue = Number(target)

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / config.duration, 1)
      const easedProgress = easeOutCubic(progress)

      current.value = Math.round(startValue + (endValue - startValue) * easedProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        current.value = endValue
      }
    }

    animationFrame = requestAnimationFrame(step)
  }

  const startObserver = (element) => {
    if (!element) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            hasAnimated.value = true
            animate()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: config.threshold }
    )

    observer.observe(element)
  }

  onMounted(() => {
    // Cherche l'élément avec la ref passée en paramètre
    // Le composant parent devra utiliser cette fonction correctement
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (animationFrame) cancelAnimationFrame(animationFrame)
  })

  return {
    current,
    startObserver,
    hasAnimated,
  }
}