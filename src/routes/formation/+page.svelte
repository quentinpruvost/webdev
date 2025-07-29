<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
</script>

<Seo 
  title="Formation Développeur Web - Svelte, React & Fondamentaux"
  description="Montez en compétence avec des cours particuliers sur SvelteKit, React, et les bases du web (HTML, CSS, JavaScript). Approche pratique et personnalisée."
/>

<div class="py-12 md:py-20 space-y-20">

  <section class="text-center" in:fly={{ y: -20, duration: 600 }}>
    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900">
      Devenez un meilleur développeur.
    </h1>
    <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
      Je propose des formations et cours particuliers sur-mesure pour vous aider à maîtriser les outils du web moderne, avec une approche centrée sur la pratique, que vous soyez débutant ou confirmé.
    </p>
  </section>

  <section class="max-w-4xl mx-auto" in:fly={{ y: 20, duration: 600, delay: 200 }}>
    <h2 class="text-3xl font-bold text-center text-slate-900">Programme & Technologies</h2>
    
    <div class="mt-10 space-y-8">
      <div>
        <h3 class="text-2xl font-semibold text-slate-800">🚀 Pour les Débutants : Les Fondamentaux du Web</h3>
        <div class="mt-4 grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 class="font-bold text-xl">HTML5</h4>
            <p class="text-slate-600 mt-2">Structurez vos premières pages web.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 class="font-bold text-xl">CSS3</h4>
            <p class="text-slate-600 mt-2">Donnez du style et créez des designs responsives.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 class="font-bold text-xl">JavaScript</h4>
            <p class="text-slate-600 mt-2">Rendez vos sites interactifs.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-slate-800">✨ Pour Aller Plus Loin : Les Frameworks Modernes</h3>
        <div class="mt-4 grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 class="font-bold text-xl">SvelteKit</h4>
            <p class="text-slate-600 mt-2">De débutant à avancé : composants, stores, routing...</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 class="font-bold text-xl">React</h4>
            <p class="text-slate-600 mt-2">Hooks, state management, Next.js et bonnes pratiques.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 class="font-bold text-xl">Tailwind CSS</h4>
            <p class="text-slate-600 mt-2">Maîtrisez le design d'interfaces modernes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-center" in:fly={{ y: 20, duration: 600, delay: 400 }}>
    <h2 class="text-3xl font-bold text-slate-900">Prêt à commencer ?</h2>
    <p class="mt-4 text-lg text-slate-600">Chaque session est adaptée à votre niveau et à vos objectifs.</p>
    <a href="/contact" class="mt-8 inline-block bg-slate-900 text-white font-bold px-8 py-3 rounded-lg transition-transform hover:scale-105">
      Discutons de votre formation
    </a>
  </section>

</div>