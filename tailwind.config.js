/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainTheme: "#faf9fb",
				green: {
					bg: "#ecf7d4",
					badge: "#d6f497",
				},
				orange: {
					bg: "#f9efe1",
					badge: "#f7e088",
				},
				red: {
					bg: "#fbe5e7",
					badge: "#fdc6c7",
				},
			},
		},
	},

	plugins: [],
};
