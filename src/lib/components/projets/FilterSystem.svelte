<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let technologies: string[];
  export let activeFilter: string;

  const dispatch = createEventDispatcher();

  function setFilter(tech: string) {
    dispatch('filterChange', tech);
  }
</script>

<div class="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
  <button 
    on:click={() => setFilter('Tous')}
    class="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300"
    class:bg-slate-900={activeFilter === 'Tous'}
    class:text-white={activeFilter === 'Tous'}
    class:bg-white={activeFilter !== 'Tous'}
    class:text-slate-700={activeFilter !== 'Tous'}
  >
    Tous
  </button>
  {#each technologies as tech}
    <button
      on:click={() => setFilter(tech)}
      class="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300"
      class:bg-slate-900={activeFilter === tech}
      class:text-white={activeFilter === tech}
      class:bg-white={activeFilter !== tech}
      class:text-slate-700={activeFilter !== tech}
    >
      {tech}
    </button>
  {/each}
</div>