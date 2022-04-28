module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	  ],
	// darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			poppins: ['Poppins', 'sans-serif'],
		}
	},
	plugins: []
};
