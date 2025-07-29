<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
</script>

<Seo title="Articles" description="Articles, tutoriels et réflexions sur le développement web." />

<section class="text-center py-16" in:fly={{ y: -20, duration: 600 }}>
  <h1 class="text-5xl font-extrabold">Articles & Ressources</h1>
  <p class="mt-4 text-lg text-slate-600">Je partage ici mes connaissances sur le web.</p>
</section>

<div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  
  <a 
    href="/blog/pourquoi-un-site-rapide" 
    class="block group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
    in:fly={{ y: 20, duration: 600, delay: 200 }}
  >
    <article class="p-8">
      <p class="text-sm text-slate-500">27 juillet 2025</p>
      <h2 class="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
        Pourquoi un Site Rapide est Crucial pour Votre Chiffre d'Affaires
      </h2>
      <p class="mt-2 text-slate-600">
        Chaque seconde compte. Découvrez comment la vitesse de votre site impacte directement vos ventes.
      </p>
      <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Lire la suite →
      </p>
    </article>
  </a>
  <a 
  href="/blog/bases-html" 
  class="block group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
>
  <article class="p-8">
    <p class="text-sm text-slate-500">1er août 2025</p>
    <h2 class="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      Les Bases du HTML : Structurez Votre Première Page Web
    </h2>
    <p class="mt-2 text-slate-600">
      Le point de départ de toute aventure sur le web.
    </p>
    <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Lire la suite →
    </p>
  </article>
</a>

<a 
  href="/blog/introduction-css" 
  class="block group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
>
  <article class="p-8">
    <p class="text-sm text-slate-500">2 août 2025</p>
    <h2 class="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      Introduction au CSS : Donnez Vie à Vos Pages Web
    </h2>
    <p class="mt-2 text-slate-600">
      Si le HTML est le squelette, le CSS est l'habillage.
    </p>
    <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Lire la suite →
    </p>
  </article>
</a>
  <a 
  href="/blog/dangers-site-pas-cher" 
  class="block group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
  in:fly={{ y: 20, duration: 600, delay: 400 }}
>
  <article class="p-8">
    <p class="text-sm text-slate-500">28 juillet 2025</p>
    <h2 class="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      Les 5 Dangers d'un Site Web "Pas Cher"
    </h2>
    <p class="mt-2 text-slate-600">
      Découvrez comment un site à bas coût peut en réalité coûter une fortune à votre entreprise.
    </p>
    <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Lire la suite →
    </p>
  </article>
</a>
<a 
  href="/blog/seo-pour-pme" 
  class="block group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
  in:fly={{ y: 20, duration: 600, delay: 600 }}
>
  <article class="p-8">
    <p class="text-sm text-slate-500">29 juillet 2025</p>
    <h2 class="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      SEO pour les PME : 3 Actions pour Viser la Première Page
    </h2>
    <p class="mt-2 text-slate-600">
      Démystifiez le SEO avec 3 actions concrètes pour améliorer votre classement sur Google.
    </p>
    <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Lire la suite →
    </p>
  </article>
</a>
<a 
  href="/blog/site-pret-pour-mobiles" 
  class="block group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
  in:fly={{ y: 20, duration: 600, delay: 800 }}
>
  <article class="p-8">
    <p class="text-sm text-slate-500">30 juillet 2025</p>
    <h2 class="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      Votre Site est-il Prêt pour les Mobiles ?
    </h2>
    <p class="mt-2 text-slate-600">
      Plus de 70% de vos visiteurs utilisent un smartphone. Est-ce que votre site est à la hauteur ?
    </p>
    <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Lire la suite →
    </p>
  </article>
</a>
<a 
  href="/blog/sveltekit-vs-nextjs" 
  class="block group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
  in:fly={{ y: 20, duration: 600, delay: 1000 }}
>
  <article class="p-8">
    <p class="text-sm text-slate-500">31 juillet 2025</p>
    <h2 class="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      SvelteKit vs. Next.js (React)
    </h2>
    <p class="mt-2 text-slate-600">
      Une comparaison technique et les raisons derrière mon choix de SvelteKit pour la plupart des projets.
    </p>
    <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Lire la suite →
    </p>
  </article>
</a>

  </div>