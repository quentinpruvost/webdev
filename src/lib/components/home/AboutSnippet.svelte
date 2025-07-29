<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="mt-24 grid md:grid-cols-3 gap-8 items-center">
  <div 
    class="md:col-span-1"
    in:fly={{ x: -50, duration: 800, delay: 200 }}
  >
    <img 
      src="/images/profil.jpg" 
      alt="Profil de Quentin"
      class="rounded-lg shadow-xl aspect-square object-cover"
    />
  </div>
<div class="md:col-span-2" in:fly={{ x: 50, duration: 800, delay: 400 }}>
  <h2 class="text-3xl font-bold text-slate-900">Plus qu'un développeur, un partenaire pour votre projet.</h2>
  <p class="mt-4 text-lg text-slate-600">
    Basé à Saint-Nazaire (Occitanie), je suis passionné par la création d'interfaces fluides et de logiques robustes. J'accompagne mes clients de l'idée à la mise en ligne, en trouvant toujours la solution la plus élégante et performante pour chaque défi.
  </p>
  <a href="/a-propos" class="mt-6 inline-block font-semibold text-blue-600 hover:underline">
    Découvrir mon parcours →
  </a>
</div>
</section>