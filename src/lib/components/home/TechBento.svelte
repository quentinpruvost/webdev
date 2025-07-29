<script lang="ts">
  import { fly } from 'svelte/transition';
  // J'ai regroupé les icônes pour plus de clarté
  import { Code, Smartphone, Database, Wind, GitMerge } from 'lucide-svelte';
</script>

<section class="mt-24">
  <div class="text-center" in:fly={{ y: -20, duration: 600 }}>
    <h2 class="text-3xl font-bold text-slate-900">Les Outils de Mon Quotidien</h2>
    <p class="mt-2 text-lg text-slate-600">Une stack moderne pour des projets robustes et performants.</p>
  </div>
  
  <div 
    class="mt-10 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-4"
    in:fly={{ y: 20, duration: 600, delay: 200 }}
  >
    <div class="lg:col-span-3 lg:row-span-2 rounded-xl p-6 bg-white border border-slate-200 shadow-sm group relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative">
        <Code class="w-8 h-8 text-blue-500" />
        <h3 class="text-xl font-bold mt-4 text-slate-800">SvelteKit</h3>
        <p class="text-sm text-slate-600 mt-2">Le framework qui allie performance et plaisir de développer. Mon choix numéro un pour tout projet web.</p>
      </div>
    </div>

    <div class="lg:col-span-3 lg:row-span-1 rounded-xl p-6 bg-white border border-slate-200 shadow-sm group relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-50 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative flex items-center gap-4">
        <Code class="w-8 h-8 text-cyan-500" />
        <div>
          <h3 class="font-semibold text-slate-800">React & Next.js</h3>
          <p class="text-sm text-slate-600">Pour les écosystèmes riches et les applications à grande échelle.</p>
        </div>
      </div>
    </div>

    <div class="lg:col-span-3 lg:row-span-2 rounded-xl p-6 bg-white border border-slate-200 shadow-sm group relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative">
        <Smartphone class="w-8 h-8 text-purple-500" />
        <h3 class="text-xl font-bold mt-4 text-slate-800">Développement Mobile</h3>
        <p class="text-sm text-slate-600 mt-2">Applications natives pour Android & iOS avec des technologies modernes comme Capacitor ou React Native.</p>
      </div>
    </div>
    
    <div class="lg:col-span-2 lg:row-span-1 rounded-xl p-6 bg-white border border-slate-200 shadow-sm group relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative flex items-center gap-4">
        <Wind class="w-8 h-8 text-sky-500" />
        <div>
          <h3 class="font-semibold text-slate-800">Tailwind CSS</h3>
        </div>
      </div>
    </div>

    <div class="lg:col-span-2 lg:row-span-1 rounded-xl p-6 bg-white border border-slate-200 shadow-sm group relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative flex items-center gap-4">
        <Database class="w-8 h-8 text-emerald-500" />
        <div>
          <h3 class="font-semibold text-slate-800">Bases de Données</h3>
        </div>
      </div>
    </div>
    
    <div class="lg:col-span-2 lg:row-span-1 rounded-xl p-6 bg-white border border-slate-200 shadow-sm group relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative flex items-center gap-4">
        <GitMerge class="w-8 h-8 text-rose-500" />
        <div>
          <h3 class="font-semibold text-slate-800">Outils & Design</h3>
          <p class="text-sm text-slate-600">Git, Figma, Vercel</p>
        </div>
      </div>
    </div>
  </div>
</section>