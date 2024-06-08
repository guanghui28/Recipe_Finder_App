import { useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import RecipeCard from "../components/RecipeCard";
import RecipeSkeleton from "../components/RecipeSkeleton";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

export default function Home() {
	const inputRef = useRef();
	const [searchQuery, setSearchQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await fetch(
					`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
				);
				const data = await res.json();
				setRecipes(data.hits);
			} catch (error) {
				console.log(error);
				setRecipes([]);
			} finally {
				setLoading(false);
			}
		};

		if (searchQuery.length < 3) {
			return;
		} else {
			fetchData();
		}
	}, [searchQuery]);

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<main className="bg-mainTheme flex-1 p-10">
			<div className="container">
				<form>
					<label className="shadow-md flex items-center gap-2 rounded-md py-2 px-4 overflow-hidden">
						<GoSearch className="w-6 h-6 text-slate-500 cursor-pointer" />
						<input
							ref={inputRef}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							type="text"
							className="flex-1 outline-none bg-transparent border-b text-sm md:text-md text-slate-600"
							placeholder="What do you want to cook today?"
						/>
					</label>
				</form>

				<h1 className="mt-4">Recommend Recipes</h1>

				<p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
					Popular Choices
				</p>

				{!recipes.length ? (
					<p className="text-center text-md">NOT FOUND</p>
				) : (
					<div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
						{!loading &&
							recipes?.map(({ recipe }, index) => (
								<RecipeCard key={index} recipe={recipe} />
							))}

						{loading &&
							[...Array(9)].map((_, index) => <RecipeSkeleton key={index} />)}
					</div>
				)}
			</div>
		</main>
	);
}
