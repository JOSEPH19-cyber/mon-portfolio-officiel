<script setup>
defineProps({
  as: {
    type: String,
    default: 'link',
  },
  href: {
    type: String,
    default: '#',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  external: {
    type: Boolean,
    default: false,
  },
})

// Classes selon le variant
const variantClasses = {
  primary: `
    bg-gradient-to-r from-primary-500 to-accent-500
    text-white font-semibold
    shadow-lg shadow-primary-500/30
    hover:shadow-xl hover:shadow-primary-500/50
    hover:-translate-y-1
  `,
  glass: `
    glass text-slate-100 font-semibold
    hover:-translate-y-1 hover:border-primary-500/40
    hover:shadow-lg hover:shadow-primary-500/10
  `,
  outline: `
    border border-primary-500/40 text-primary-400 font-semibold
    hover:bg-primary-500/10 hover:border-primary-500
    hover:-translate-y-1
  `,
}

// Classes selon la taille
const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm md:text-base rounded-xl',
  lg: 'px-8 py-4 text-base md:text-lg rounded-xl',
}
</script>

<template>
  <component
    :is="as"
    :href="as === 'link' ? href : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="[
      'group inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer',
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <slot />
  </component>
</template>