/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray, 	// Tailwind CSS 2.x
			trueGray: colors.trueGray, 	// Tailwind CSS 2.x
			blueGray: colors.blueGray, 	// Tailwind CSS 2.x
			coolGray: colors.coolGray, 	// Tailwind CSS 2.x
			gray: colors.gray,
			slate: colors.slate, 		// Tailwind CSS 3.x
			zinc: colors.zinc, 			// Tailwind CSS 3.x
			neutral: colors.blueGray, 	// Tailwind CSS 3.x
			stone: colors.stone, 		// Tailwind CSS 3.x
		},
  },
  plugins: [],
}
