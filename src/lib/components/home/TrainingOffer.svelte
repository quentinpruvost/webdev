<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section 
  class="mt-24 rounded-2xl bg-white border border-slate-200 shadow-sm p-8 md:p-12"
  in:fly={{ y: 20, duration: 800 }}
>
  <div class="text-center">
    <h2 class="text-3xl font-bold text-slate-900">Partager la Connaissance</h2>
    <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
      Passionné par la transmission, je propose des formations personnalisées pour vous aider à maîtriser Svelte, React, et les fondamentaux du web.
    </p>
    <a href="/formation" class="mt-8 inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-transform hover:scale-105">
      Découvrir mes formations
    </a>
  </div>
</section>