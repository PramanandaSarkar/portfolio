/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1D3557',
				secondary: '#F4A261',
				accent: '#457B9D',
				background: '#F5F5F5',
			  },
			  fontFamily: {
				sans: ['Inter', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
