/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				home: "#faf9fb",
				lightYellow: "#ecf7d4",
				yellowTag: "#d6f497",
				favorites: "#faf9fb",
			},
		},
	},
	plugins: [],
};
