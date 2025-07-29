<script lang="ts">
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import AboutSnippet from '$lib/components/home/AboutSnippet.svelte';
  import ServicesSection from '$lib/components/home/ServicesSection.svelte'; // <-- 1. IMPORTER
  import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
  import TechBento from '$lib/components/home/TechBento.svelte';
  import RecentArticles from '$lib/components/home/RecentArticles.svelte';
  import TrainingOffer from '$lib/components/home/TrainingOffer.svelte';
  import CallToAction from '$lib/components/home/CallToAction.svelte';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo 
  title="Quentin Pruvost - Développeur Web & Mobile, Formateur" 
  description="Création de sites web et applications pour particuliers et entreprises. Formations Svelte & React. Basé à Saint-Nazaire, Occitanie."
/>

<div class="relative z-10 space-y-24 md:space-y-32">
  <HeroSection />
  <ServicesSection /> <AboutSnippet />
  <FeaturedProjects />
  <RecentArticles />
  <TechBento />
  <TrainingOffer />
  <CallToAction />
</div>