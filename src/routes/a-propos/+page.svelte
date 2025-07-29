<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import Intro from '$lib/components/about/Intro.svelte';
  import Timeline from '$lib/components/about/Timeline.svelte';
  // Vous pouvez créer un composant Hobbies plus tard si vous le souhaitez
</script>

<Seo 
  title="À Propos de Moi"
  description="Découvrez mon parcours, ma passion pour le développement web et comment je peux vous aider à réaliser vos projets."
/>

<div class="space-y-24 md:space-y-32 py-12 md:py-20">
  <Intro />
  <Timeline />
  </div>