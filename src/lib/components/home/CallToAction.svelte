<script lang="ts">
  import { scale } from 'svelte/transition';
</script>

<section 
  class="mt-24 py-20 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center"
  in:scale={{ start: 0.95, duration: 600, delay: 200 }}
>
  <h2 class="text-4xl font-extrabold">Prêt à donner vie à votre projet ?</h2>
  <p class="mt-4 max-w-xl mx-auto">
    Discutons de vos idées. Je suis toujours à la recherche de nouveaux défis passionnants.
  </p>
  <a href="/contact" class="mt-8 inline-block bg-white text-slate-900 font-bold px-8 py-3 rounded-lg transition-transform hover:scale-105">
    Contactez-moi
  </a>
</section>