/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'charly-red': '#D32F2F',      // Un rojo intenso
				'charly-black': '#1a1a1a',    // Negro casi puro
				'charly-white': '#f8f9fa',    // Un blanco humo (no quema la vista)
			},
		},
	},
	plugins: [],
}