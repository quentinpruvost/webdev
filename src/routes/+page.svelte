<script lang="ts">
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import AboutSnippet from '$lib/components/home/AboutSnippet.svelte';
  import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
  import TechBento from '$lib/components/home/TechBento.svelte';
  import RecentArticles from '$lib/components/home/RecentArticles.svelte'; // <-- NOUVEAU
  import TrainingOffer from '$lib/components/home/TrainingOffer.svelte';
  import CallToAction from '$lib/components/home/CallToAction.svelte';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo 
  title="Quentin Pruvost - Développeur Web Freelance à Saint-Nazaire,30200" 
  description="Développeur freelance basé en Occitanie, spécialisé Svelte & React. Je crée des sites web performants et propose des formations pour vous aider à monter en compétence."
/>

<div class="relative z-10 space-y-24 md:space-y-32">
  <HeroSection />
  <AboutSnippet />
  <FeaturedProjects />
  <RecentArticles /> <TechBento />
  <TrainingOffer />
  <CallToAction />
</div>