<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
</script>

<Seo 
  title="Les Bases du HTML : Structurez Votre Première Page Web"
  description="Un guide pour les débutants complets pour comprendre le rôle du HTML et écrire les premières lignes de code pour créer une page web."
/>

<div class="py-12 md:py-20" in:fly={{ y: 20, duration: 600, delay: 200 }}>
  
  <div class="max-w-4xl mx-auto mb-12">
    <a href="/blog" class="font-semibold text-blue-600 hover:underline">
      ← Retour à tous les articles
    </a>
  </div>

  <header class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
      Les Bases du HTML : Structurez Votre Première Page Web
    </h1>
    <p class="mt-4 text-lg text-slate-500">
      Le point de départ de toute aventure sur le web.
    </p>
  </header>

  <article class="prose prose-lg prose-slate mx-auto max-w-4xl 
                prose-blockquote:border-blue-500 prose-blockquote:text-slate-600 
                prose-a:text-blue-600 hover:prose-a:underline">
    <p>
      Si le web était un bâtiment, le HTML (HyperText Markup Language) en serait le squelette. C'est le langage qui nous permet de définir la structure et le contenu d'une page : où placer un titre, un paragraphe, une image ou un lien. Sans HTML, il n'y a pas de site web. C'est la première compétence, la plus essentielle, à maîtriser.
    </p>
    
    <h3>Qu'est-ce qu'une "balise" ?</h3>
    <p>
      Le HTML fonctionne avec un système de "balises". Une balise est simplement une instruction que l'on donne au navigateur, entourée de chevrons <code>&lt;</code> et <code>&gt;</code>. La plupart des balises fonctionnent par paires : une balise ouvrante (ex: <code>&lt;p&gt;</code> pour un paragraphe) et une balise fermante (<code>&lt;/p&gt;</code>).
    </p>
    
    <h3>Les Balises Essentielles</h3>
    <ul>
      <li><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, ... : Pour les titres (du plus important au moins important).</li>
      <li><code>&lt;p&gt;</code> : Pour les paragraphes de texte.</li>
      <li><code>&lt;a href="..."&gt;</code> : Pour créer un lien hypertexte.</li>
      <li><code>&lt;img src="..." alt="..."&gt;</code> : Pour afficher une image.</li>
      <li><code>&lt;div&gt;</code> : Pour créer un conteneur générique afin de regrouper des éléments.</li>
    </ul>

    <blockquote>Le HTML est sémantique. Choisir la bonne balise, ce n'est pas juste pour le style, c'est pour donner du sens à votre contenu.</blockquote>

    <h2>Prêt à Aller Plus Loin ?</h2>
    <p>
      Comprendre ces bases est la première étape. Mais le vrai pouvoir vient de la manière dont on les combine et dont on les stylise avec le CSS. C'est exactement ce que nous explorons dans mes formations pour débutants.
    </p>
    <p>
      <a href="/formation">Découvrez comment je peux vous aider à maîtriser les fondamentaux du web.</a>
    </p>
  </article>
</div>