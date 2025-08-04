<script lang="ts">
  // On n'a plus besoin du "slug" ici
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let tags: string[];
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group">
  <div class="overflow-hidden">
    <img 
      src={imageUrl} 
      alt={`Aperçu de ${title}`} 
      class="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
    />
  </div>
  
  <div class="p-6 flex flex-col flex-grow">
    <div class="flex flex-wrap gap-2 mb-4">
      {#each tags as tag}
        <span class="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{tag}</span>
      {/each}
    </div>

    <h3 class="text-xl font-bold text-slate-800">{title}</h3>
    <p class="mt-2 text-slate-600 flex-grow">{description}</p>
    
    <p class="mt-4 font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Voir l'étude de cas →
    </p>
  </div>
</div>