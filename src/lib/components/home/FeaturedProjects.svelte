<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { fade } from 'svelte/transition';
  import { projects } from '$lib/projects'; // 1. Importer la liste complète des projets

  // 2. Sélectionner les 2 premiers projets de la liste pour les mettre en avant
  const featuredProjects = projects.slice(0, 2); 
</script>

<section class="mt-24" in:fade={{ duration: 800, delay: 200 }}>
  <h2 class="text-center text-3xl font-bold text-slate-900">Quelques réalisations</h2>
  
<div class="mt-10 grid md:grid-cols-2 gap-8">
  {#each featuredProjects as project}
    <a href="/projets/{project.slug}">
      <ProjectCard {...project} />
    </a>
  {/each}
</div>

  <div class="mt-12 text-center">
    <a href="/projets" class="font-semibold text-blue-600 hover:underline">
      Voir tous mes projets →
    </a>
  </div>
</section>