export type Project = {
	slug: string;
	title: string;
	description: string;
	imageUrl: string;
	tags: string[];
	liveUrl: string | null;
	sourceUrl: string | null;
	problem?: string;
	solution?: string;
	galleryImages?: string[];
};

export const projects: Project[] = [
	{
		slug: 'snackattack',
		title: 'SnackAttack - Commande en Ligne',
		description: "Site web pour un restaurant de burgers, avec un menu en ligne et un système de commande.",
		imageUrl: '/images/projet-snackattack.jpg',
		tags: ['SvelteKit', 'E-commerce', 'Design'],
		liveUrl: 'https://snack-c46t.vercel.app/',
		sourceUrl: '#',
		problem: "SnackAttack avait besoin d'une plateforme en ligne moderne pour permettre à ses clients de consulter le menu et de commander facilement, afin d'augmenter les ventes à emporter.",
		solution: "J'ai développé un site web complet avec une identité visuelle forte. La plateforme inclut un système de filtrage de menu, un constructeur de burger personnalisé, un panier d'achat et une page de connexion, le tout dans une interface rapide et intuitive.",
		galleryImages: [
			'/images/snackattack-menu.jpg',
			'/images/snackattack-compose.jpg',
			'/images/snackattack-builder.jpg',
			'/images/snackattack-login.jpg',
			'/images/snackattack-map.jpg'
		]
	},
    {
 		slug: 'sushi-flow',
		title: 'Sushi Flow - Restaurant Japonais',
		description: "Développement d'un site vitrine et de commande pour un restaurant de sushis. Design élégant et expérience utilisateur fluide.",
		imageUrl: '/images/projet-sushiflow.jpg',
		tags: ['React', 'Design', 'API'],
		liveUrl: 'https://sushi-delta-five.vercel.app/',
		sourceUrl: '#',
		problem: "Le restaurant Sushi Flow souhaitait une présence en ligne premium pour refléter la qualité de sa cuisine. Il fallait un site qui soit non seulement esthétique, mais aussi fonctionnel, permettant aux clients de consulter les menus et de réserver une table simplement.",
		solution: "J'ai créé un site web sur-mesure avec une direction artistique sobre et élégante, utilisant une typographie serif pour une touche de luxe. J'ai développé un système de menus filtrables pour les plats et les boissons, ainsi qu'un module de réservation intuitif. Le site est entièrement responsive pour une expérience parfaite sur mobile.",
		galleryImages: [
			'/images/sushiflow-boissons.jpg',
			'/images/sushiflow-reservations.jpg',
            '/images/sushiflow-menu.jpg',
		]
    },
    {
		slug: 'yummys',
		title: "Yummy's - Glacier Artisanal",
		description: "Site vitrine pour une franchise de glaciers. Intégration d'une identité visuelle colorée et gestion de contenu pour les menus et actualités.",
		imageUrl: '/images/projet-yummys.jpg',
		tags: ['Frontend', 'Design', 'JavaScript'],
		liveUrl: 'https://yumm-ten.vercel.app/',
		sourceUrl: '#',
		problem: "Yummy's, une chaîne de glaciers artisanaux, avait besoin d'un site web engageant pour présenter son identité de marque, ses produits, et des fonctionnalités uniques comme le 'Parfum du Jour' et un calendrier des saveurs.",
		solution: "J'ai conçu et développé un site web vibrant qui capture l'esprit ludique de la marque. J'ai intégré un menu visuel, une page carrières, et des modules interactifs pour la recherche de restaurants et la consultation du calendrier. Le site est entièrement administrable pour permettre à l'équipe de mettre à jour le contenu facilement.",
		galleryImages: [
			'/images/yummys-calendrier.jpg',
			'/images/yummys-parfum-du-jour.jpg',
			'/images/yummys-menu.jpg',
			'/images/yummys-mission.jpg',
			'/images/yummys-carrieres.jpg'
		]
    },
        {
		slug: 'centre-hospitalier',
		title: 'Centre Hospitalier Fictif',
		description: "Développement d'un site vitrine pour un établissement de santé, avec une structure complexe et une navigation intuitive.",
		imageUrl: '/images/ch-hero.jpg',
		tags: ['Intégration', 'Design', 'Accessibilité'],
		liveUrl: 'https://chtest.vercel.app/',
		sourceUrl: '#',
		problem: "Un centre hospitalier avait besoin de refondre son site web pour le rendre plus accessible, plus facile à naviguer pour les patients et les visiteurs, et pour mieux présenter son offre de soins complète et ses différentes structures.",
		solution: "J'ai réalisé l'intégration complète d'un design sobre et professionnel. J'ai mis en place une méga-navigation pour gérer les nombreuses rubriques, ainsi que des modules d'accès rapide aux services essentiels (prise de rendez-vous, factures, urgences). Un annuaire interactif avec recherche et filtrage a également été développé pour trouver facilement un service ou un praticien.",
		galleryImages: [
			'/images/ch-acces-rapide.jpg',
			'/images/ch-poles.jpg',
			'/images/ch-specialites.jpg',
			'/images/ch-annuaire.jpg'
		]
    },   
    {
        slug: 'portfolio',
        title: "Mon Portfolio (Ce site)",
        description: "Démonstration de mes compétences avec SvelteKit, animée et optimisée pour une expérience mémorable.",
        imageUrl: "/images/projet-portfolio.jpg",
        tags: ["SvelteKit", "Tailwind CSS", "Design"],
        liveUrl: "/",
        sourceUrl: "#"
    },
    {
        slug: 'osengo-fitness',
        title: "Osengo Fitness",
        description: "Création d'une landing page moderne pour une salle de sport, axée sur la conversion et la présentation des offres.",
        imageUrl: "/images/projet-osengo-fitness.jpg",
        tags: ["HTML", "CSS", "Design"],
        liveUrl: "https://quentinpruvost.github.io/site-salle-de-sport/index.html",
        sourceUrl: "#"
    },
    {
        slug: '77events',
        title: "77events",
        description: "Intégration d'une maquette pour une agence événementielle, avec un focus sur les animations et le responsive design.",
        imageUrl: "/images/projet-77events.jpg",
        tags: ["HTML", "CSS", "Animations"],
        liveUrl: "https://debuggez-le-site-agence.vercel.app/#nos-services",
        sourceUrl: "#"
    },
    {
        slug: 'ohmyfood',
        title: "Ohmyfood",
        description: "Site de réservation pour restaurants avec des animations CSS avancées pour une expérience dynamique.",
        imageUrl: "/images/projet-ohmyfood.jpg",
        tags: ["HTML", "CSS", "Animations"],
        liveUrl: "https://quentinpruvost.github.io/oh_my_food/",
        sourceUrl: "#"
    },
    {
        slug: 'nina-carducci',
        title: "Nina Carducci - Photographe",
        description: "Optimisation SEO et performance (Lighthouse) d'un site de photographe pour améliorer sa visibilité.",
        imageUrl: "/images/projet-nina-carducci.jpg",
        tags: ["SEO", "Performance", "Débogage"],
        liveUrl: "https://quentinpruvost.github.io/nina_carduccifinal/#about",
        sourceUrl: "#"
    },
    {
        slug: 'kasa',
        title: "Kasa - Location d'appartements",
        description: "Création d'une application web avec React pour une plateforme de location immobilière.",
        imageUrl: "/images/projet-kasa.jpg",
        tags: ["React", "JavaScript", "API"],
        liveUrl: "https://kasa-app-amber.vercel.app/appartement/46d188c5",
        sourceUrl: "#"
    }
];