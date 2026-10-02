<script setup>
defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  padding: {
    type: String,
    default: 'p-6 md:p-8',
  },
  hover: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String,
    default: 'rounded-2xl',
  },
  reveal: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <component
    :is="tag"
    :class="[
      'glass relative overflow-hidden transition-all duration-500',
      rounded,
      padding,
      hover ? 'hover:-translate-y-2 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10' : '',
      reveal ? 'reveal' : '',
    ]"
  >
    <!-- Effet de lueur au survol (optionnel, visible seulement si hover) -->
    <div
      v-if="hover"
      class="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500
             bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"
    ></div>

    <!-- Contenu -->
    <div class="relative z-10">
      <slot />
    </div>
  </component>
</template>