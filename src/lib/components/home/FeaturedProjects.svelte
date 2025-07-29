<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { fade } from 'svelte/transition';

  const featuredProjects = [
  {
    title: "Mon Portfolio (Ce site)",
    description: "Démonstration de mes compétences avec SvelteKit, animée et optimisée pour une expérience mémorable.",
    imageUrl: "/images/projet-portfolio.jpg",
    tags: ["SvelteKit", "Tailwind CSS", "Design"],
    liveUrl: "/",
    sourceUrl: "#"
  },
  {
    title: "Centre Hospitalier",
    description: "Développement d'un site pour un établissement de santé, avec une structure complexe et une navigation intuitive.",
    imageUrl: "/images/projet-centre-hospitalier.jpg",
    tags: ["Design", "Intégration"],
    liveUrl: "https://chtest.vercel.app/",
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