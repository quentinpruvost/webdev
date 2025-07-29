<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AuroraBackground from '$lib/components/home/AuroraBackground.svelte'; // <-- 1. Importer ici
  import '../app.css';
</script>

<div class="min-h-screen text-slate-800 relative">
  <AuroraBackground /> <div class="relative z-10">
    <Header />

    <main class="mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
      <slot />
    </main>
  
    <Footer />
  </div>
</div>