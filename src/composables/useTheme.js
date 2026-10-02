// ============================================
// COMPOSABLE — THEME (Dark / Light)
// ============================================

import { ref, onMounted, watch } from 'vue'

export function useTheme() {
  // Par défaut on est en dark (notre thème principal)
  const isDark = ref(true)

  // Applique le thème au <html>
  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
  }

  // Toggle manuel
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // Au montage : on lit la préférence sauvegardée ou celle du système
  onMounted(() => {
    const saved = localStorage.getItem('theme')

    if (saved === 'light') {
      isDark.value = false
    } else if (saved === 'dark') {
      isDark.value = true
    } else {
      // Pas de préférence sauvegardée → on suit le système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }

    applyTheme(isDark.value)
  })

  // À chaque changement : on applique et on sauvegarde
  watch(isDark, (newValue) => {
    applyTheme(newValue)
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  })

  return {
    isDark,
    toggleTheme,
  }
}