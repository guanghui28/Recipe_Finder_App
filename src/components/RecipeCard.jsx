import { FaHeart } from "react-icons/fa";
import { LuHeartPulse, LuSoup } from "react-icons/lu";

export default function RecipeCard() {
	return (
		<div className="flex flex-col bg-lightYellow rounded-md p-3 relative overflow-hidden min-w-[250px]">
			<a href="#" className="relative h-48">
				<img
					src="/1.jpg"
					alt="image1"
					className="rounded-md w-full h-full object-cover cursor-pointer"
				/>

				<div className="absolute rounded-full p-1 cursor-pointer bg-white bottom-2 left-2 flex items-center gap-1 text-sm">
					<LuSoup className="w-4 h-4" /> 4 Servings
				</div>

				<div className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer">
					<FaHeart className="w-6 h-6 hover:fill-red-500 hover:text-red-500 transition-colors duration-300" />
				</div>
			</a>

			<div className="flex mt-1">
				<p className="font-bold tracking-wide">Roasted Chicken</p>
			</div>

			<p className="my-2">Turkish Kitchen</p>

			<div className="flex gap-2 mt-auto">
				<div className="flex gap-1 bg-yellowTag items-center p-1 rounded-md">
					<LuHeartPulse className="w-4 h-4" />
					<span>Gluten free</span>
				</div>
				<div className="flex gap-1 bg-yellowTag items-center p-1 rounded-md">
					<LuHeartPulse className="w-4 h-4" />
					<span>Heart healthy</span>
				</div>
			</div>
		</div>
	);
}
