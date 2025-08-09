<script lang="ts">
  import { fade } from 'svelte/transition';
  import { ChevronLeft, ChevronRight, X } from 'lucide-svelte';
  import { createEventDispatcher, onMount } from 'svelte';

  export let images: string[];
  export let startIndex = 0;

  let currentIndex = startIndex;
  const dispatch = createEventDispatcher();

  // On crée une référence à notre élément principal pour pouvoir le "focuser"
  let dialogElement: HTMLElement;

  onMount(() => {
    // On met le focus sur la lightbox quand elle s'ouvre
    dialogElement.focus();
  });

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'Escape') dispatch('close');
  }

  // Fonction pour fermer si on appuie sur Entrée ou Espace
  function handleCloseKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      dispatch('close');
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div 
  bind:this={dialogElement}
  class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
  transition:fade={{ duration: 200 }}
  on:click={() => dispatch('close')}
  on:keydown={handleCloseKey}
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
  <button on:click|stopPropagation={() => dispatch('close')} class="absolute top-4 right-4 text-white hover:text-slate-300">
    <X size={32} />
  </button>

  <button on:click|stopPropagation={prev} class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300">
    <ChevronLeft size={48} />
  </button>
  
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div class="relative max-w-4xl max-h-[80vh]" on:click|stopPropagation role="document">
    {#key currentIndex}
      <img 
        src={images[currentIndex]} 
        alt="Galerie - vue {currentIndex + 1}" 
        class="max-h-[80vh] w-auto object-contain"
        in:fade={{ duration: 200 }}
      />
    {/key}
  </div>

  <button on:click|stopPropagation={next} class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300">
    <ChevronRight size={48} />
  </button>
</div>