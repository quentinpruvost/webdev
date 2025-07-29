<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="mt-24" in:fly={{ y: 20, duration: 800 }}>
  <h2 class="text-center text-3xl font-bold text-slate-900">Articles Récents</h2>
  <div class="mt-10 max-w-4xl mx-auto space-y-6">
    <a href="/blog/sveltekit-vs-nextjs" class="block p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
      <h3 class="font-bold text-xl text-slate-800">SvelteKit vs. Next.js (React)</h3>
      <p class="text-slate-600">Pourquoi j'ai choisi Svelte pour mes projets en 2025.</p>
    </a>
    <a href="/blog/dangers-site-pas-cher" class="block p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
      <h3 class="font-bold text-xl text-slate-800">Les 5 Dangers d'un Site Web "Pas Cher"</h3>
      <p class="text-slate-600">Comment ils coûtent une fortune à votre entreprise.</p>
    </a>
  </div>
  <div class="mt-12 text-center">
    <a href="/blog" class="font-semibold text-blue-600 hover:underline">
      Lire tous les articles →
    </a>
  </div>
</section>