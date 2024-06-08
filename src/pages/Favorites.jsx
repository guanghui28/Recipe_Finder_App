import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
	const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
	return (
		<main className="container bg-mainTheme flex-1 p-10 min-h-screen">
			<div className="w-full">
				<h1 className="mb-4">My Favorites</h1>

				{!favorites.length && (
					<div className="h-[80vh] flex flex-col items-center gap-4">
						<img src="/404.svg" alt="404 svg" className="h-3/4" />
					</div>
				)}

				{favorites && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{favorites.map((recipe, index) => (
							<RecipeCard key={index} recipe={recipe} />
						))}
					</div>
				)}
			</div>
		</main>
	);
}
