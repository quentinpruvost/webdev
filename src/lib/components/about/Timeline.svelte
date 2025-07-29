<script lang="ts">
  import { viewport } from '$lib/actions/viewport';

  // Personnalisez ces événements avec votre propre parcours
  const events = [
    { year: '2021', title: 'Découverte du Code', description: 'Premières lignes en HTML, CSS & JavaScript. La passion est née.' },
    { year: '2022', title: 'Formation Intensive', description: 'Plongée dans l\'écosystème JavaScript, apprentissage de React et des fondamentaux du backend avec Node.js.' },
    { year: '2023', title: 'Premiers Projets Freelance', description: 'Mise en pratique des compétences sur des projets concrets pour des clients.' },
    { year: '2024', title: 'Spécialisation Svelte & Lancement', description: 'Découverte de SvelteKit et lancement à 100% en freelance.' },
    { year: '2025', title: 'Ouvert aux Nouvelles Opportunités', description: 'Toujours en quête de défis stimulants pour aider les entreprises à réussir en ligne.' },
  ];

  let visibleStates = events.map(() => false);

  function handleEnter(index: number) {
    visibleStates[index] = true;
  }
</script>

<section class="mt-24">
  <h2 class="text-center text-3xl font-bold text-slate-900 mb-12">Mon Parcours</h2>
  <div class="relative max-w-2xl mx-auto">
    <div class="absolute left-1/2 top-0 h-full w-0.5 bg-slate-200 -translate-x-1/2"></div>

    {#each events as event, i}
      <div 
        class="relative mb-8 flex justify-between items-center w-full"
        class:flex-row-reverse={i % 2 !== 0}
      >
<div class="w-5/12">
  
  <div 
    class="p-4 bg-white rounded-lg border-2 border-transparent shadow-md transition-all duration-500"
    class:opacity-0={!visibleStates[i]}
    class:translate-y-8={!visibleStates[i]}
    class:hover:border-blue-500={visibleStates[i]}
    use:viewport
    on:enterViewport={() => handleEnter(i)}
  >
    <p class="font-bold text-slate-500">{event.year}</p>
    <h3 class="font-semibold">{event.title}</h3>
    <p class="text-sm text-slate-600">{event.description}</p>
  </div>

</div>
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-4 w-4 rounded-full transition-colors duration-500"
             class:bg-blue-500={visibleStates[i]}
             class:bg-slate-200={!visibleStates[i]}
        ></div>
        <div class="w-5/12"></div>
      </div>
    {/each}
  </div>
</section>