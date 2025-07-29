<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="grid md:grid-cols-2 gap-12 items-center">
  <div in:fly={{ x: -50, duration: 800 }}>
    <img 
      src="/images/profil.jpg" 
      alt="Profil de Quentin"
      class="rounded-lg shadow-xl aspect-square object-cover"
    />
  </div>
  <div in:fly={{ x: 50, duration: 800 }}>
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
      Transformer la complexité en expériences simples et mémorables.
    </h1>
    <p class="mt-6 text-lg text-slate-600">
      Je suis Quentin, un développeur web freelance passionné par la résolution de problèmes. Mon objectif est de créer des applications et des sites web qui sont non seulement performants et robustes, mais aussi intuitifs et agréables à utiliser.
    </p>
  </div>
</section>