<script lang="ts">
  import { fly, fade } from 'svelte/transition';
</script>

<section class="flex flex-col items-center justify-center text-center py-24 md:py-32">
  <h1 
    class="text-5xl md:text-7xl font-extrabold tracking-tighter"
    in:fly={{ y: 20, duration: 800, delay: 200 }}
  >
    Créateur d'expériences web,
    <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
      rapides et intuitives.
    </span>
  </h1>

  <p 
    class="mt-6 max-w-2xl text-lg md:text-xl text-slate-600"
    in:fade={{ duration: 800, delay: 600 }}
  >
    Bonjour, je suis quentin, développeur passionné. Je transforme des idées complexes en applications web et mobile élégantes et performantes.
  </p>

  <div 
    class="mt-8 flex flex-wrap justify-center gap-4"
    in:fade={{ duration: 800, delay: 900 }}
  >
    <a href="/projets" class="transform rounded-md bg-slate-900 px-7 py-3 font-medium text-white transition-transform hover:scale-105">Voir mes projets</a>
    <a href="/contact" class="transform rounded-md bg-white px-7 py-3 font-medium text-slate-800 shadow-sm transition-transform hover:scale-105">Me contacter</a>
  </div>
</section>