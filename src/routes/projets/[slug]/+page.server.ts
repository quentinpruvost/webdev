import { error } from '@sveltejs/kit';
import { projects } from '$lib/projects';
import type { PageServerLoad } from './$types'; // 1. Importer le type

// 2. Appliquer le type à la fonction `load`
export const load: PageServerLoad = async ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, `Le projet "${params.slug}" n'a pas été trouvé`);
	}

	return { project };
};