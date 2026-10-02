<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Hero from '@/components/sections/Hero.vue'
import About from '@/components/sections/About.vue'
import Services from '@/components/sections/Services.vue'
import Skills from '@/components/sections/Skills.vue'
import Timeline from '@/components/sections/Timeline.vue'
import Projects from '@/components/sections/Projects.vue'
import Contact from '@/components/sections/Contact.vue'
import Footer from '@/components/layout/Footer.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute top-0 -left-40 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl animate-blob" style="animation-delay: 2s"></div>
      <div class="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-blob" style="animation-delay: 4s"></div>
    </div>

    <Navbar />

    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </main>

    <Footer />

    <BackToTop />
  </div>
</template>