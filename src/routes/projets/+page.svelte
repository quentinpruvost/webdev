<script lang="ts">
  import PageHeader from '$lib/components/projets/PageHeader.svelte';
  import FilterSystem from '$lib/components/projets/FilterSystem.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';

  // --- BASE DE DONNÉES DE VOS PROJETS ---
  const allProjects = [
    {
      title: "Portfolio (Ce site)",
      description: "Démonstration de mes compétences avec SvelteKit, animée et optimisée pour une expérience mémorable.",
      imageUrl: "/images/portfolio-preview.jpg",
      tags: ["SvelteKit", "Tailwind CSS", "Design"],
      liveUrl: "/",
      sourceUrl: "https://github.com/VOTRE-PSEUDO/portfolio"
    },
    {
      title: "Projet E-commerce Fictif",
      description: "Boutique en ligne complète avec gestion de panier, authentification et une interface d'administration.",
      imageUrl: "/images/ecommerce-preview.jpg",
      tags: ["SvelteKit", "Node.js", "Base de données"],
      liveUrl: "#",
      sourceUrl: "#"
    },
    {
      title: "Application Mobile de Tâches",
      description: "Une application cross-platform pour gérer ses tâches quotidiennes, développée avec React Native.",
      imageUrl: "/images/mobile-app-preview.jpg", // Ajoutez une image
      tags: ["React Native", "Mobile", "TypeScript"],
      liveUrl: "#",
      sourceUrl: "#"
    },
    {
      title: "Dashboard d'Analyse de Données",
      description: "Interface d'analyse de données en temps réel construite avec React et des librairies de graphiques.",
      imageUrl: "/images/dashboard-preview.jpg", // Ajoutez une image
      tags: ["React", "Design", "API"],
      liveUrl: "#",
      sourceUrl: "#"
    }
  ];

  // --- LOGIQUE DE FILTRAGE ---
  let activeFilter = 'Tous';
  
  // On extrait toutes les technologies uniques pour les boutons de filtre
  const allTags = [...new Set(allProjects.flatMap(p => p.tags))];

  // $: est une déclaration réactive. Ce code se ré-exécute à chaque fois que `activeFilter` change.
  $: filteredProjects = activeFilter === 'Tous' 
    ? allProjects 
    : allProjects.filter(p => p.tags.includes(activeFilter));
</script>

<Seo 
  title="Mes Projets"
  description="Découvrez une sélection de mes réalisations en développement web et mobile."
/>

<PageHeader />

<FilterSystem 
  technologies={allTags}
  activeFilter={activeFilter}
  on:filterChange={(e) => activeFilter = e.detail}
/>

{#key activeFilter}
  <div class="grid md:grid-cols-2 gap-8">
    {#each filteredProjects as project, i}
      <div in:fly={{ y: 20, duration: 500, delay: 100 * i }}>
        <ProjectCard {...project} />
      </div>
    {/each}
  </div>
{/key}