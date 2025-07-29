<script lang="ts">
  import { fly } from 'svelte/transition';

  const impacts = [
    { title: 'Visibilité Accrue', description: 'Un site web est votre vitrine mondiale, accessible 24/7. Il vous place devant des milliers de clients potentiels.' },
    { title: 'Crédibilité Professionnelle', description: 'Un design soigné et un site performant inspirent confiance et renforcent votre image de marque.' },
    { title: 'Moteur de Croissance', description: 'Générez des prospects, vendez en ligne et automatisez des tâches pour augmenter directement votre chiffre d\'affaires.' },
  ]
</script>

<section class="mt-24">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-slate-900">Un investissement, pas une dépense.</h2>
    <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
      Au-delà d'une simple présence en ligne, un site web est un puissant levier stratégique pour le développement de votre activité.
    </p>
  </div>

  <div class="mt-10 grid md:grid-cols-3 gap-8">
    {#each impacts as impact, i}
      <div 
        class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm"
        in:fly={{ y: 20, duration: 600, delay: 200 * i }}
      >
        <h3 class="text-xl font-bold">{impact.title}</h3>
        <p class="mt-2 text-slate-600">{impact.description}</p>
      </div>
    {/each}
  </div>
</section>