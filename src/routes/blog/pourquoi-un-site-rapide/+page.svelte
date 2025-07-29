<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
</script>

<Seo 
  title="Pourquoi un Site Rapide est Crucial"
  description="Découvrez comment la vitesse de votre site impacte directement vos ventes."
/>

<div class="py-12 md:py-20" in:fly={{ y: 20, duration: 600, delay: 200 }}>
  
  <div class="max-w-4xl mx-auto mb-12">
    <a href="/blog" class="font-semibold text-blue-600 hover:underline">
      ← Retour à tous les articles
    </a>
  </div>

  <header class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
      Pourquoi un Site Rapide est Crucial pour Votre Chiffre d'Affaires
    </h1>
    <p class="mt-4 text-lg text-slate-500">
      Publié le 27 juillet 2025
    </p>
  </header>

  <article class="prose prose-lg prose-slate mx-auto max-w-4xl 
                prose-blockquote:border-blue-500 prose-blockquote:text-slate-600 
                prose-a:text-blue-600 hover:prose-a:underline">
    <h2>Le coût d'une seconde d'attente</h2>
    <p>
      Saviez-vous qu'une seule seconde de temps de chargement supplémentaire peut réduire vos conversions de 7% ? Pour un site e-commerce, c'est une perte sèche. Dans cet article, nous allons explorer les chiffres et les raisons pour lesquelles la performance web n'est pas une option, mais une nécessité.
    </p>
    
    <h3>1. L'impact sur l'expérience utilisateur (UX)</h3>
    <p>
      Un site lent est frustrant. Les utilisateurs sont impatients et n'hésiteront pas à aller voir la concurrence.
    </p>
    
    <h3>2. Google pénalise les sites lents</h3>
    <p>
      Le temps de chargement est un facteur de classement majeur pour Google. Un site plus rapide est mieux positionné, ce qui amène plus de trafic qualifié.
    </p>
        <p>
      Prêt à construire un site qui travaille vraiment pour vous ? <a href="/contact">Discutons de votre projet.</a>
    </p>
    
    <blockquote>La performance est la fonctionnalité la plus importante.</blockquote>
  </article>
</div>