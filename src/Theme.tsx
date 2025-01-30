import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#0057B7', // Bleu royal moderne
			light: '#2F80ED', // Bleu clair pour les hover
			dark: '#003B8B', // Bleu foncé pour le contraste
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#0081A7', // Bleu turquoise professionnel
			light: '#00A7E1', // Bleu cyan éclatant
			dark: '#005F73', // Bleu profond et élégant
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#F7F9FC', // Gris bleuté doux
			paper: '#FFFFFF', // Blanc pur pour une meilleure lisibilité
		},
		text: {
			primary: '#1A202C', // Gris charbon élégant pour une lisibilité parfaite
			secondary: '#4A5568', // Gris intermédiaire pour un bon contraste
		},
		divider: '#E2E8F0', // Séparateurs discrets pour l'interface
	},
	typography: {
		fontFamily: 'Poppins, sans-serif', // Police moderne et élégante
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1E90FF', // Bleu électrique sur fond sombre
			light: '#3AAFFF', // Bleu clair lumineux
			dark: '#0050B7', // Bleu intense pour une hiérarchie forte
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#00A8CC', // Bleu turquoise moderne
			light: '#3AD5F5', // Bleu cyan léger pour les accents
			dark: '#007B9E', // Bleu profond et sophistiqué
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#121826', // Bleu noir pour minimiser la fatigue visuelle
			paper: '#1C2333', // Bleu foncé légèrement contrasté pour les cartes
		},
		text: {
			primary: '#EAEAEA', // Blanc cassé pour un contraste doux et lisible
			secondary: '#A0AEC0', // Gris bleuté pour le texte complémentaire
		},
		divider: '#2D3748', // Séparateurs bien équilibrés
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
	},
});
