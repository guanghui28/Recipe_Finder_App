import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
	const fav = true;
	return (
		<main className="container bg-favorites flex-1 p-10 min-h-screen">
			<div className="w-full">
				<h1>My Favorites</h1>

				{!fav && (
					<div className="h-[80vh] flex flex-col items-center gap-4">
						<img src="/404.svg" alt="404 svg" className="h-3/4" />
					</div>
				)}

				{fav && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
					</div>
				)}
			</div>
		</main>
	);
}
