<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'sm',
  },
})

const variantClasses = {
  default: `
    bg-slate-900/5 dark:bg-white/5
    text-slate-700 dark:text-slate-300
    border border-slate-900/10 dark:border-white/10
  `,
  primary: `
    bg-primary-500/10 text-primary-600 dark:text-primary-400
    border border-primary-500/30
  `,
  accent: `
    bg-accent-500/10 text-accent-600 dark:text-accent-400
    border border-accent-500/30
  `,
  ghost: `
    bg-transparent text-slate-600 dark:text-slate-400
    border border-slate-900/10 dark:border-white/10
  `,
}

const sizeClasses = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-1.5 text-sm',
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-300',
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <slot />
    {{ label }}
  </span>
</template>