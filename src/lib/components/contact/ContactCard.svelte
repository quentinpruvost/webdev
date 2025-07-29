<script lang="ts">
  // Ce composant accepte une icône, un titre, un détail et un lien
  export let icon: any;
  export let title: string;
  export let detail: string;
  export let href: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="block group text-left">
  <div class="p-6 h-full bg-white rounded-lg shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-500 hover:-translate-y-1">
    
    <svelte:component this={icon} class="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
    
    <h3 class="mt-4 text-lg font-bold text-slate-800">{title}</h3>
    <p class="mt-1 text-slate-600 group-hover:text-blue-500 transition-colors">{detail}</p>
  </div>
</a>