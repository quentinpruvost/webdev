<script lang="ts">
  import { MapPin } from 'lucide-svelte';
</script>

<footer class="mt-24 border-t border-slate-200">
  <div class="mx-auto max-w-5xl px-6 py-12">
    <div class="grid md:grid-cols-3 gap-8">
      <div class="md:col-span-1">
        <a href="/" class="text-xl font-extrabold text-slate-900">
          quentin
        </a>
        <p class="mt-2 text-sm text-slate-600">
          Créateur d'expériences web modernes et performantes.
        </p>
      </div>

      <div class="md:col-span-1">
        <h3 class="font-semibold text-slate-800">Navigation</h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li><a href="/projets" class="text-slate-600 hover:text-blue-600">Projets</a></li>
          <li><a href="/blog" class="text-slate-600 hover:text-blue-600">Articles</a></li>
          <li><a href="/formation" class="text-slate-600 hover:text-blue-600">Formation</a></li>
          <li><a href="/a-propos" class="text-slate-600 hover:text-blue-600">À Propos</a></li>
        </ul>
      </div>

      <div class="md:col-span-1">
        <h3 class="font-semibold text-slate-800">Contact</h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li><a href="/contact" class="text-slate-600 hover:text-blue-600">Formulaire de contact</a></li>
          <li>
            <div class="flex items-center gap-2 text-slate-600">
              <MapPin class="w-4 h-4" />
              <span>Saint-Nazaire, Occitanie</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
      <p>&copy; {new Date().getFullYear()} Quentin Pruvost. Tous droits réservés.</p>
    </div>
  </div>
</footer>