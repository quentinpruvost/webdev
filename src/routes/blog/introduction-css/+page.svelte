<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
</script>

<Seo 
  title="Introduction au CSS : Donnez Vie à Vos Pages Web"
  description="Apprenez comment le CSS transforme une simple page HTML en un design attrayant et professionnel. Le guide parfait pour les débutants."
/>

<div class="py-12 md:py-20" in:fly={{ y: 20, duration: 600, delay: 200 }}>
  
  <div class="max-w-4xl mx-auto mb-12">
    <a href="/blog" class="font-semibold text-blue-600 hover:underline">
      ← Retour à tous les articles
    </a>
  </div>

  <header class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
      Introduction au CSS : Donnez Vie à Vos Pages Web
    </h1>
    <p class="mt-4 text-lg text-slate-500">
      Si le HTML est le squelette, le CSS est l'habillage.
    </p>
  </header>

  <article class="prose prose-lg prose-slate mx-auto max-w-4xl 
                prose-blockquote:border-blue-500 prose-blockquote:text-slate-600 
                prose-a:text-blue-600 hover:prose-a:underline">
    <p>
      Le CSS (Cascading Style Sheets) est le langage qui permet de contrôler l'apparence de votre site web. Couleurs, polices, espacements, animations... tout ce qui touche au design est géré par le CSS. C'est lui qui transforme une page HTML brute et ennuyeuse en une expérience visuelle engageante.
    </p>
    
    <h3>Comment ça marche ? Un sélecteur et des propriétés.</h3>
    <p>
      La logique du CSS est simple. Vous "sélectionnez" un élément HTML (par exemple, tous les titres <code>h1</code>) et vous lui appliquez des "propriétés" (par exemple, `color: blue;`).
    </p>
  <pre><code>{'h1 {@html `{'}
  color: blue; /* Met le texte en bleu */
  font-size: 2rem; /* Augmente la taille de la police */
{@html `}`}'}</code></pre>
    
    <h3>Le Modèle de Boîte (Box Model)</h3>
    <p>
      En CSS, chaque élément est une boîte rectangulaire. Comprendre comment manipuler les propriétés de cette boîte est fondamental.
    </p>
    <ul>
      <li><strong>Content :</strong> Le contenu de la boîte (texte, image).</li>
      <li><strong>Padding :</strong> L'espace à l'intérieur de la boîte, entre le contenu et la bordure.</li>
      <li><strong>Border :</strong> La bordure de la boîte.</li>
      <li><strong>Margin :</strong> L'espace à l'extérieur de la boîte, qui la sépare des autres éléments.</li>
    </ul>

    <blockquote>Maîtriser le CSS, c'est maîtriser l'art de l'agencement et de la présentation sur le web.</blockquote>

    <h2>Le CSS Moderne avec Tailwind</h2>
    <p>
      Aujourd'hui, des outils comme Tailwind CSS (que j'utilise sur ce site) permettent d'écrire du CSS de manière beaucoup plus rapide et cohérente, directement dans le HTML. C'est une compétence très recherchée que j'enseigne dans mes formations.
    </p>
    <p>
      Vous voulez apprendre à créer des designs professionnels ? <a href="/formation">Découvrez mes cours sur les fondamentaux du style web.</a>
    </p>
  </article>
</div>