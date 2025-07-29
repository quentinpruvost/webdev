<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { fly } from 'svelte/transition';
  import ContactCard from '$lib/components/contact/ContactCard.svelte';
  import { Mail, Phone, Linkedin, Instagram, MessageSquare, Facebook } from 'lucide-svelte';  let formData = { name: '', email: '', message: '' };
  let success = false;
  let loading = false;

  async function handleSubmit() {
    loading = true;
    try {
      const response = await fetch('https://formspree.io/f/xanboozg', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      if (response.ok) {
        success = true;
        formData = { name: '', email: '', message: '' };
      } else {
        alert('Une erreur est survenue.');
      }
    } catch (error) {
      alert('Une erreur est survenue.');
    } finally {
      loading = false;
    }
  }
</script>

<Seo 
  title="Contact"
  description="Prêt à démarrer un projet ou à discuter d'une opportunité ? Contactez-moi."
/>

<div class="py-12 md:py-20">

  <div class="text-center" in:fly={{ y: -20, duration: 600 }}>
    <h1 class="text-5xl font-extrabold text-slate-900">Contactez-moi</h1>
    <p class="mt-4 max-w-xl mx-auto text-lg text-slate-600">
      Utilisez le formulaire ou l'une des méthodes ci-dessous. Je réponds généralement sous 24h.
    </p>
  </div>

  <div class="mt-12 max-w-2xl mx-auto">
    {#if success}
      <div class="p-8 text-center bg-green-100 text-green-800 rounded-lg" in:fly={{ y: 20 }}>
        <h2 class="text-2xl font-bold">Merci !</h2>
        <p>Votre message a bien été envoyé. Je reviendrai vers vous très prochainement.</p>
      </div>
    {:else}
      <form 
        class="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-slate-200"
        on:submit|preventDefault={handleSubmit}
        in:fly={{ y: 20, duration: 600, delay: 200 }}
      >
        <div>
          <label for="name" class="block text-sm font-semibold text-slate-700">Votre nom</label>
          <input type="text" id="name" bind:value={formData.name} required class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
        </div>
        <div>
          <label for="email" class="block text-sm font-semibold text-slate-700">Votre email</label>
          <input type="email" id="email" bind:value={formData.email} required class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
        </div>
        <div>
          <label for="message" class="block text-sm font-semibold text-slate-700">Votre message</label>
          <textarea id="message" rows="5" bind:value={formData.message} required class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" disabled={loading} class="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-md hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02] disabled:opacity-75">
          {#if loading} Envoi en cours... {:else} Envoyer le message {/if}
        </button>
      </form>
    {/if}
  </div>

  <div class="mt-20 max-w-4xl mx-auto" in:fly={{ y: 20, duration: 600, delay: 400 }}>
    <div class="text-center">
        <h3 class="text-2xl font-bold text-slate-800">Contact Direct & Réseaux</h3>
        <p class="mt-2 text-slate-600">Choisissez votre méthode de contact préférée.</p>
    </div>
 <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ContactCard icon={Mail} title="Email" detail="quentinpruvost26@gmail.com" href="mailto:quentinpruvost26@gmail.com" />
    <ContactCard icon={Phone} title="Téléphone" detail="07 62 75 22 19" href="tel:0762752219" />
    <ContactCard icon={Linkedin} title="LinkedIn" detail="/in/quentin-pruvost" href="#" />
    <ContactCard icon={Instagram} title="Instagram" detail="@quentin.pruvost.pro" href="#" />
    <ContactCard icon={MessageSquare} title="TikTok" detail="@quentin.dev" href="#" />
    <ContactCard icon={Facebook} title="Facebook" detail="/quentin.pruvost.pro" href="#" />
</div>
  </div>

</div>