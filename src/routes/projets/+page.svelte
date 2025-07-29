<script lang="ts">
  import PageHeader from '$lib/components/projets/PageHeader.svelte';
  import FilterSystem from '$lib/components/projets/FilterSystem.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';

  // --- BASE DE DONNÉES DEs PROJETS ---
const allProjects = [

  {
    title: "77events",
    description: "Intégration d'une maquette pour une agence événementielle, avec un focus sur les animations et le responsive design.",
    imageUrl: "/images/projet-77events.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://debuggez-le-site-agence.vercel.app/#nos-services",
    sourceUrl: "#"
  },
  {
    title: "Centre Hospitalier",
    description: "Développement d'un site pour un établissement de santé, avec une structure complexe et une navigation intuitive.",
    imageUrl: "/images/projet-centre-hospitalier.jpg",
    tags: ["Design", "Intégration"],
    liveUrl: "https://chtest.vercel.app/",
    sourceUrl: "#"
  },
   {
    title: "Mon Portfolio (Ce site)",
    description: "Démonstration de mes compétences avec SvelteKit, animée et optimisée pour une expérience mémorable.",
    imageUrl: "/images/projet-portfolio.jpg",
    tags: ["SvelteKit", "Tailwind CSS", "Design"],
    liveUrl: "/",
    sourceUrl: "#"
  },
  {
    title: "Ohmyfood",
    description: "Site de réservation pour restaurants avec des animations CSS avancées pour une expérience utilisateur dynamique.",
    imageUrl: "/images/projet-ohmyfood.jpg",
    tags: ["HTML", "CSS", "Animations"],
    liveUrl: "https://quentinpruvost.github.io/oh_my_food/",
    sourceUrl: "#"
  },
  {
    title: "Nina Carducci - Photographe",
    description: "Optimisation SEO et performance (Lighthouse) d'un site de photographe pour améliorer sa visibilité et son temps de chargement.",
    imageUrl: "/images/projet-nina-carducci.jpg",
    tags: ["SEO", "Performance", "Débogage"],
    liveUrl: "https://quentinpruvost.github.io/nina_carduccifinal/#about",
    sourceUrl: "#"
  },
  {
    title: "Kasa - Location d'appartements",
    description: "Création d'une application web avec React pour une plateforme de location immobilière, incluant des galeries et des fiches détaillées.",
    imageUrl: "/images/projet-kasa.jpg",
    tags: ["React", "JavaScript", "API"],
    liveUrl: "https://kasa-app-amber.vercel.app/appartement/46d188c5",
    sourceUrl: "#"
  },
    {
    title: "Osengo Fitness",
    description: "Création d'une landing page moderne pour une salle de sport, axée sur la conversion et la présentation des offres d'abonnement.",
    imageUrl: "/images/projet-osengo-fitness.jpg",
    tags: ["HTML", "CSS", "Design"],
    liveUrl: "https://quentinpruvost.github.io/site-salle-de-sport/index.html", // Mettez le lien vers le site en ligne si vous l'avez
    sourceUrl: "#" // Mettez le lien vers le code source si vous l'avez
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