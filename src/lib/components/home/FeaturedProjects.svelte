<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { fade } from 'svelte/transition';

  const featuredProjects = [
    {
      title: "Portfolio (Ce site)",
      description: "Construit avec SvelteKit, ce site est une vitrine de mon savoir-faire en design, animation et performance.",
      imageUrl: "/images/portfolio-preview.jpg",
      tags: ["SvelteKit", "Tailwind CSS", "Design"],
      liveUrl: "/",
      sourceUrl: "#" // Mettez votre lien GitHub ici
    },
    {
      title: "Dashboard d'Analyse de Données",
      description: "Une interface complexe construite en React pour la visualisation de données en temps réel. (Projet fictif)",
      imageUrl: "/images/dashboard-preview.jpg",
      tags: ["React", "API", "Design"],
      liveUrl: "#",
      sourceUrl: "#"
    }
  ];
</script>

<section class="mt-24" in:fade={{ duration: 800, delay: 200 }}>
  <h2 class="text-center text-3xl font-bold text-slate-900">Quelques réalisations</h2>
  
  <div class="mt-10 grid md:grid-cols-2 gap-8">
    {#each featuredProjects as project}
      <ProjectCard {...project} />
    {/each}
  </div>

  <div class="mt-12 text-center">
    <a href="/projets" class="font-semibold text-blue-600 hover:underline">
      Voir tous les projets →
    </a>
  </div>
</section>