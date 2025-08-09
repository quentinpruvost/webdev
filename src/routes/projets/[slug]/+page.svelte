<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly, fade } from 'svelte/transition';
  import Lightbox from '$lib/components/projets/Lightbox.svelte'; // Importer le nouveau composant

  export let data;
  const { project } = data;

  // Variables pour gérer l'ouverture/fermeture et l'image de départ de la lightbox
  let lightboxOpen = false;
  let lightboxStartIndex = 0;

  function openLightbox(index: number) {
    lightboxStartIndex = index;
    lightboxOpen = true;
  }
</script>

<Seo title={project.title} description={project.description} imageUrl={project.imageUrl} />

<div class="py-12 md:py-20">
  <header class="text-center" in:fly={{ y: -20, duration: 600 }}>
    <a href="/projets" class="font-semibold text-blue-600 hover:underline mb-8 block">
      ← Retour à tous les projets
    </a>
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900">
      {project.title}
    </h1>
    <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-600">{project.description}</p>
    <div class="mt-6 flex justify-center gap-4">
      {#if project.liveUrl}
        <a href={project.liveUrl} target="_blank" class="bg-slate-900 text-white px-6 py-2 rounded-md font-semibold">Voir le site live</a>
      {/if}
    </div>
  </header>

  <div class="mt-12" in:fade={{ duration: 600, delay: 200 }}>
    <img src={project.imageUrl} alt="Vue principale du projet {project.title}" class="rounded-lg shadow-xl mx-auto"/>
  </div>
  
  {#if project.problem && project.solution}
    <div class="mt-20 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      <aside class="md:col-span-1 space-y-6">
        <div>
          <h3 class="font-bold text-slate-800">Technologies</h3>
          <div class="flex flex-wrap gap-2 mt-2">
            {#each project.tags as tag}
              <span class="text-sm bg-slate-100 px-3 py-1 rounded-full">{tag}</span>
            {/each}
          </div>
        </div>
        <div>
          <h3 class="font-bold text-slate-800">Mon Rôle</h3>
          <p class="text-slate-600">Développement Frontend, Design UI/UX, Optimisation</p>
        </div>
      </aside>

      <div class="md:col-span-2 prose prose-lg">
        <h2>Le Défi</h2>
        <p>{project.problem}</p>
        <h2>La Solution</h2>
        <p>{project.solution}</p>
      </div>
    </div>
  {/if}

  {#if project.galleryImages && project.galleryImages.length > 0}
    <div class="mt-20 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Galerie du Projet</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {#each project.galleryImages as image, i}
          <button on:click={() => openLightbox(i)} class="overflow-hidden rounded-lg group aspect-video">
            <img 
              src={image} 
              alt="Galerie du projet {project.title} - vue {i + 1}" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

{#if lightboxOpen}
  <Lightbox 
    images={project.galleryImages!} startIndex={lightboxStartIndex}
    on:close={() => lightboxOpen = false}
  />
{/if}