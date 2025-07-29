<script lang="ts">
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let tags: string[];
  export let liveUrl: string | null = null;
  export let sourceUrl: string | null = null;
</script>

<a 
  href={liveUrl || sourceUrl || '#'} 
  target="_blank" 
  rel="noopener noreferrer" 
  class="block group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
>
  <div class="overflow-hidden">
    <img src={imageUrl} alt={`Aperçu de ${title}`} class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
  </div>
  <div class="p-6">
    <div class="flex flex-wrap gap-2 mb-4">
      {#each tags as tag}
        <span class="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{tag}</span>
      {/each}
    </div>
    <h3 class="text-xl font-bold text-slate-800">{title}</h3>
    <p class="mt-2 text-slate-600 h-16">{description}</p>
    <div class="mt-6 flex items-center justify-between">
      <span class="font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Voir le projet →
      </span>
    </div>
  </div>
</a>