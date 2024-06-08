import { FaHeart } from "react-icons/fa";
import { LuHeartPulse, LuSoup } from "react-icons/lu";
import { getTwoValuesFromArray } from "../helpers";
import { useState } from "react";
export default function RecipeCard({ recipe }) {
	const [isFavorite, setIsFavorite] = useState(
		JSON.parse(localStorage.getItem("favorites"))?.includes(recipe.label) ||
			false
	);
	const addRecipeToFavorites = (e) => {
		e.preventDefault();

		let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const isRecipeAlreadyInFavorites = favorites.some(
			(fav) => fav.label === recipe.label
		);

		if (isRecipeAlreadyInFavorites) {
			favorites = favorites.filter((fav) => fav.label !== recipe.label);
			setIsFavorite(false);
		} else {
			favorites.push(recipe);
			setIsFavorite(true);
		}

		localStorage.setItem("favorites", JSON.stringify(favorites));
	};

	return (
		<div
			className={`shadow-sm group flex flex-col rounded-md p-3 relative overflow-hidden min-w-[250px]`}
		>
			<a
				href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
				target="_blank"
				className="relative h-48 overflow-hidden"
			>
				<img
					src={recipe.image}
					alt={recipe.label}
					className="group-hover:scale-[1.1] ease-in-out duration-300 rounded-md w-full h-full object-cover cursor-pointer"
				/>

				<div className="absolute rounded-full p-1 px-2 cursor-pointer bg-white bottom-2 left-2 flex items-center gap-1 text-sm">
					<LuSoup className="w-4 h-4" /> {recipe.yield} Servings
				</div>

				<div
					className="group/like absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer"
					onClick={addRecipeToFavorites}
				>
					{!isFavorite ? (
						<FaHeart className="w-4 h-4 group-hover/like:fill-red-500 group-hover/like:text-red-500 transition-colors duration-300" />
					) : (
						<FaHeart className="w-4 h-4 group-hover/like:fill-black group-hover/like:text-black transition-colors duration-300 fill-red-500 text-red-500" />
					)}
				</div>
			</a>

			<div className="flex mt-1">
				<p className="font-bold tracking-wide capitalize">{recipe.label}</p>
			</div>

			<p className="my-2 capitalize">{recipe.cuisineType}</p>

			<div className="flex gap-2 mt-auto">
				{getTwoValuesFromArray(recipe.healthLabels).map((label, idx) => (
					<div
						key={idx}
						className={`flex gap-1 bg-green-badge items-center p-1 rounded-md`}
					>
						<LuHeartPulse className="w-4 h-4" />
						<span className="text-sm tracking-tighter font-semibold">
							{label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
