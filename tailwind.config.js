/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./frontend/index.html",
    	"./frontend/src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				bodoni: ['"Bodoni Moda"', 'serif'],
				poppins: ['"Poppins"', 'sans-serif'],
				montserrat: ['Montserrat', 'serif'],
				vibes: ['"Great Vibes"', 'cursive'],
			}
		},
	},
	plugins: [],
}