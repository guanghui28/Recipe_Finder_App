export const getTwoValuesFromArray = (arr) => arr.slice(0, 2);

const COLORS = ["red", "green", "orange"];

export const getRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * COLORS.length);
	const randomColorName = COLORS[randomIndex];
	return randomColorName;
};
