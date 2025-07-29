<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
</script>

<Seo 
  title="Votre Site est-il Prêt pour les Mobiles ?"
  description="Plus de 70% de vos visiteurs utilisent un smartphone. Découvrez pourquoi un design responsive n'est pas une option, mais une obligation."
/>

<div class="py-12 md:py-20" in:fly={{ y: 20, duration: 600, delay: 200 }}>
  
  <div class="max-w-4xl mx-auto mb-12">
    <a href="/blog" class="font-semibold text-blue-600 hover:underline">
      ← Retour à tous les articles
    </a>
  </div>

  <header class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
      Votre Site est-il Prêt pour les Mobiles ?
    </h1>
    <p class="mt-4 text-lg text-slate-600">
      Pourquoi 70% de vos visiteurs risquent de partir.
    </p>
  </header>

  <article class="prose prose-lg prose-slate mx-auto max-w-4xl 
                prose-blockquote:border-blue-500 prose-blockquote:text-slate-600 
                prose-a:text-blue-600 hover:prose-a:underline">
    <p>
      Prenez votre smartphone. C'est probablement l'outil que vous utilisez le plus pour naviguer sur internet. Vos clients font de même. Si votre site web s'affiche mal sur leur téléphone – texte illisible, boutons trop petits, obligation de zoomer – leur réaction est immédiate : ils quittent la page et ne reviendront pas. C'est ce qu'on appelle une mauvaise expérience utilisateur, et c'est le moyen le plus sûr de perdre un client.
    </p>
    
    <h3>Qu'est-ce que le "Responsive Design" ?</h3>
    <p>
      Le design responsive (ou adaptatif) est une approche de conception web qui vise à offrir une expérience de consultation optimale sur une large gamme d'appareils, des ordinateurs de bureau aux tablettes et smartphones. Concrètement, le site "sent" la taille de l'écran et réorganise son contenu pour que tout soit parfaitement lisible et utilisable, sans effort de la part de l'utilisateur.
    </p>
    
    <h3>Les Conséquences d'un Site non-Responsive</h3>
    <ul>
      <li><strong>Perte de trafic :</strong> Google favorise les sites "mobile-friendly". Si le vôtre ne l'est pas, votre classement dans les résultats de recherche en souffrira.</li>
      <li><strong>Frustration et départ des clients :</strong> Personne n'a la patience de se battre avec un site mal conçu sur mobile.</li>
      <li><strong>Image de marque dégradée :</strong> Un site qui ne fonctionne pas sur mobile donne l'impression d'une entreprise dépassée et peu soucieuse de ses clients.</li>
    </ul>

    <blockquote>Un site qui n'est pas pensé pour le mobile est un site qui ignore la majorité de ses visiteurs.</blockquote>

    <h2>Ma Méthode : "Mobile-First"</h2>
    <p>
      Lorsque je conçois un site web, j'adopte systématiquement une approche "Mobile-First". Cela signifie que je pense et conçois d'abord l'expérience pour le plus petit écran, le smartphone, avant de l'adapter pour les écrans plus grands. Cette méthode garantit une expérience utilisateur parfaite pour la majorité de votre audience.
    </p>
    <p>
      Grâce à des outils modernes comme Tailwind CSS, je peux construire des interfaces qui sont non seulement belles, mais aussi parfaitement fluides et adaptatives sur tous les appareils.
    </p>
    <p>
      Ne laissez pas un mauvais design vous coûter des clients. <a href="/contact">Assurons-nous ensemble que votre site offre la meilleure expérience possible, partout.</a>
    </p>
  </article>
</div>