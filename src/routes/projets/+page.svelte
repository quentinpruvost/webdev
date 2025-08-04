<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
  import { projects } from '$lib/projects';

  const allProjects = projects;

  let activeFilter = 'Tous';
  const allTags = [...new Set(allProjects.flatMap(p => p.tags))];
  
  $: filteredProjects = activeFilter === 'Tous' 
    ? allProjects 
    : allProjects.filter(p => p.tags.includes(activeFilter));
</script>

<Seo 
  title="Mes Projets"
  description="Découvrez une sélection de mes réalisations en développement web et mobile."
/>

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

<div class="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
  <button 
    on:click={() => activeFilter = 'Tous'}
    class="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300"
    class:bg-slate-900={activeFilter === 'Tous'}
    class:text-white={activeFilter === 'Tous'}
    class:bg-white={activeFilter !== 'Tous'}
    class:text-slate-700={activeFilter !== 'Tous'}
  >
    Tous
  </button>
  {#each allTags as tech}
    <button
      on:click={() => activeFilter = tech}
      class="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300"
      class:bg-slate-900={activeFilter === tech}
      class:text-white={activeFilter === tech}
      class:bg-white={activeFilter !== tech}
      class:text-slate-700={activeFilter !== tech}
    >
      {tech}
    </button>
  {/each}
</div>

{#key activeFilter}
  <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {#each filteredProjects as project, i}
      <a href="/projets/{project.slug}">
      <div in:fly={{ y: 20, duration: 500, delay: 100 * i }} class="h-full">
                  <ProjectCard {...project} />
        </div>
      </a>
    {/each}
  </div>
{/key}