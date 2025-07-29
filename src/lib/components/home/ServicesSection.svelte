<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Laptop, Smartphone, BrainCircuit } from 'lucide-svelte';
</script>

<section class="mt-24 text-center">
  <div in:fly={{ y: -20, duration: 600 }}>
    <h2 class="text-3xl font-bold text-slate-900">Des Solutions sur Mesure</h2>
    <p class="mt-2 text-lg text-slate-600">De la conception à la formation, je vous accompagne à chaque étape.</p>
  </div>

  <div class="mt-10 grid md:grid-cols-3 gap-8">
    <div 
      class="p-8 bg-white rounded-lg shadow-sm border border-slate-200 text-left"
      in:fly={{ y: 20, duration: 600, delay: 200 }}
    >
      <Laptop class="w-10 h-10 text-blue-500" />
      <h3 class="mt-4 text-xl font-bold">Création de Sites Web</h3>
      <p class="mt-2 text-slate-600">
        Sites pour artisans, PME ou portfolios. Chaque projet est optimisé pour la performance, le SEO et une expérience utilisateur parfaite.
      </p>
    </div>

    <div 
      class="p-8 bg-white rounded-lg shadow-sm border border-slate-200 text-left"
      in:fly={{ y: 20, duration: 600, delay: 400 }}
    >
      <Smartphone class="w-10 h-10 text-blue-500" />
      <h3 class="mt-4 text-xl font-bold">Applications Mobiles</h3>
      <p class="mt-2 text-slate-600">
        Applications pour Android & iOS qui répondent à vos besoins spécifiques. J'utilise des technologies modernes pour un résultat natif et fluide.
      </p>
    </div>

    <div 
      class="p-8 bg-white rounded-lg shadow-sm border border-slate-200 text-left"
      in:fly={{ y: 20, duration: 600, delay: 600 }}
    >
      <BrainCircuit class="w-10 h-10 text-blue-500" />
      <h3 class="mt-4 text-xl font-bold">Formation & Cours</h3>
      <p class="mt-2 text-slate-600">
        Que vous soyez débutant ou en reconversion, j'offre des cours particuliers sur les fondamentaux du web, Svelte, React et plus encore.
      </p>
    </div>
  </div>
</section>