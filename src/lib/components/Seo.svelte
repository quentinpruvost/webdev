<script lang="ts">
  import { page } from '$app/stores';

  export let title: string;
  export let description: string;
  export let imageUrl: string | null = null;
  export let author: string = 'Quentin Pruvost';
  export let siteName: string = 'Quentin Pruvost - Développeur Web';

  const siteUrl = $page.url.origin;
  const image = imageUrl ? `${siteUrl}${imageUrl}` : `${siteUrl}/default-social-image.png`; // Pensez à créer cette image par défaut dans /static

  // --- NOUVEAUTÉ : Données Structurées (JSON-LD) ---
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': siteName,
    'url': siteUrl,
    'author': {
      '@type': 'Person',
      'name': author,
      'url': siteUrl
    },
    'description': description
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content={author} />
  <link rel="canonical" href={$page.url.href} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content="fr_FR" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:creator" content="@VotrePseudoTwitter" /> <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</svelte:head>