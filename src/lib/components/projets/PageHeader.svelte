<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section 
  class="text-center py-16 md:py-24"
  in:fly={{ y: -30, duration: 800, delay: 200 }}
>
  <h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900">
    Mon Travail.
  </h1>
  <p class="mt-4 max-w-xl mx-auto text-lg text-slate-600">
    Une sélection de projets où j'ai transformé des idées en solutions concrètes et performantes.
  </p>
</section>