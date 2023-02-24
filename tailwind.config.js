/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'2xl': { max: '1920px' },
			xl: { max: '1535px' },
			lg: { max: '1279px' },
			md: { max: '1023px' },
			sm: { max: '767px' },
			xs: { max: '575px' },
		},
		colors: {
			primary: '#5142FC',
			background: '#14141F',
			yellow: '#FFBD0C',
			'bg-second': '#343444',
			gray: '#8A8AA0',
			'gray-2': '#7A798A',
			'light-gray': '#EBEBEB',
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
		},
		extend: {},
	},
	plugins: [],
}
