import { useEffect, useRef } from "react";
import { GoSearch } from "react-icons/go";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<main className="bg-home flex-1 p-10">
			<div className="container">
				<form>
					<label className="shadow-md flex items-center gap-2 rounded-md py-2 px-4 overflow-hidden">
						<GoSearch className="w-6 h-6 text-slate-500 cursor-pointer" />
						<input
							ref={inputRef}
							type="text"
							className="flex-1 outline-none bg-transparent border-b text-sm md:text-md text-slate-600"
							placeholder="What do you want to cook today?"
						/>
					</label>
				</form>

				<h1>Recommend Recipes</h1>

				<p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
					Popular Choices
				</p>

				<div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
					<RecipeCard />
				</div>
			</div>
		</main>
	);
}
