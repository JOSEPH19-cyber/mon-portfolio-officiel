<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'center',
  },
})
</script>

<template>
  <div
    class="reveal mb-16"
    :class="align === 'center' ? 'text-center' : 'text-left'"
  >
    <!-- Label -->
    <div
      v-if="label"
      class="flex items-center gap-3 mb-4"
      :class="align === 'center' ? 'justify-center' : 'justify-start'"
    >
      <span class="h-px w-8 bg-gradient-to-r from-transparent to-primary-500"></span>
      <span class="text-xs md:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-[0.2em]">
        {{ label }}
      </span>
      <span class="h-px w-8 bg-gradient-to-l from-transparent to-primary-500"></span>
    </div>

    <!-- Titre -->
    <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4
               text-slate-900 dark:text-white">
      {{ title }}
      <span v-if="highlight" class="gradient-text">{{ highlight }}</span>
    </h2>

    <!-- Sous-titre -->
    <p
      v-if="subtitle"
      class="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>
  </div>
</template>