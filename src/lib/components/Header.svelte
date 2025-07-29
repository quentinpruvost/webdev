<script lang="ts">
  import { page } from '$app/stores';
  import { fly, fade } from 'svelte/transition';
  import { Menu, X } from 'lucide-svelte';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  // Logique pour la barre de progression
  let y = 0;
  let totalScroll = 0;
  let viewHeight = 0;
  $: progress = totalScroll > viewHeight ? y / (totalScroll - viewHeight) : 0;

  // Logique pour bloquer le scroll quand le menu est ouvert
  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={viewHeight} />
<svelte:body bind:clientHeight={totalScroll} />

<header class="sticky top-0 z-50">
  <!-- On remet le style "glassmorphism" ici -->
  <nav class="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-5 backdrop-blur-lg">
    <a href="/" class="z-50 text-xl font-extrabold text-slate-900 transition-colors hover:text-blue-600" on:click={() => { if (isOpen) toggleMenu(); }}>
      atelierducode
    </a>
    
    <!-- Menu Bureau -->
    <ul class="hidden md:flex items-center gap-8 text-base font-medium text-slate-600">
      <li><a href="/" class="relative group" class:text-blue-600={$page.url.pathname === '/'}><span>Accueil</span><span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" class:scale-x-100={$page.url.pathname === '/'}></span></a></li>
      <li><a href="/projets" class="relative group" class:text-blue-600={$page.url.pathname.startsWith('/projets')}><span>Projets</span><span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" class:scale-x-100={$page.url.pathname.startsWith('/projets')}></span></a></li>
      <li><a href="/blog" class="relative group" class:text-blue-600={$page.url.pathname.startsWith('/blog')}><span>Articles</span><span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" class:scale-x-100={$page.url.pathname.startsWith('/blog')}></span></a></li>
      <li><a href="/formation" class="relative group" class:text-blue-600={$page.url.pathname.startsWith('/formation')}><span>Formation</span><span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" class:scale-x-100={$page.url.pathname.startsWith('/formation')}></span></a></li>
      <li><a href="/a-propos" class="relative group" class:text-blue-600={$page.url.pathname.startsWith('/a-propos')}><span>À Propos</span><span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" class:scale-x-100={$page.url.pathname.startsWith('/a-propos')}></span></a></li>
      <li><a href="/contact" class="relative group" class:text-blue-600={$page.url.pathname.startsWith('/contact')}><span>Contact</span><span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" class:scale-x-100={$page.url.pathname.startsWith('/contact')}></span></a></li>
    </ul>

    <!-- Bouton Hamburger (pour ouvrir) -->
    {#if !isOpen}
      <button on:click={toggleMenu} class="md:hidden p-2">
        <Menu class="text-slate-800" />
      </button>
    {/if}

    <!-- Barre de progression -->
    <div 
      class="absolute bottom-0 left-0 h-1 bg-blue-600"
      style="width: {progress * 100}%"
    ></div>
  </nav>

  <!-- Menu Mobile -->
  {#if isOpen}
    <div 
      class="fixed inset-0 bg-slate-900 z-40 p-6 flex flex-col"
      transition:fade={{ duration: 300 }}
    >
      <div class="flex items-center justify-between">
        <a href="/" class="text-xl font-extrabold text-white" on:click={toggleMenu}>
          atelierducode
        </a>
        <button on:click={toggleMenu} class="p-2">
          <X class="text-white" />
        </button>
      </div>

      <div class="flex-grow flex items-center justify-center">
        <ul class="flex flex-col gap-4 text-center">
          {#each [
            { href: '/', label: 'Accueil' },
            { href: '/projets', label: 'Projets' },
            { href: '/blog', label: 'Articles' },
            { href: '/formation', label: 'Formation' },
            { href: '/a-propos', label: 'À Propos' },
            { href: '/contact', label: 'Contact' }
          ] as item, i}
            <li in:fly={{ y: 20, duration: 300, delay: 100 + i * 50 }}>
              <a href={item.href} on:click={toggleMenu} class="text-3xl font-semibold text-slate-300 py-2 block transition-colors hover:text-white" class:text-white={$page.url.pathname === item.href}>
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <div class="text-center text-sm text-slate-500 pb-4" in:fade={{ duration: 300, delay: 500 }}>
        © {new Date().getFullYear()} Quentin Pruvost
      </div>
    </div>
  {/if}
</header>