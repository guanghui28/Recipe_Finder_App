import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<>
			<DesktopSidebar />
			<MobileSidebar />
		</>
	);
}

const DesktopSidebar = () => {
	return (
		<div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-48 lg:w-64 hidden sm:block">
			<div className="flex flex-col gap-20 sticky top-10 left-0 z-10">
				<div className="w-full">
					<img src="/logo.svg" alt="logo" className="hidden md:block" />
					<img
						src="/mobile-logo.svg"
						alt="logo mobile"
						className="block md:hidden"
					/>
				</div>

				<ul className="flex flex-col items-center md:items-start gap-8">
					<Link to="/" className="flex gap-1 items-center">
						<MdOutlineHome className="w-6 h-6" />{" "}
						<span className="font-bold hidden md:block">Home</span>
					</Link>
					<Link to="/favorites" className="flex gap-1 items-center">
						<FaRegHeart className="w-5 h-5" />{" "}
						<span className="font-bold hidden md:block">Favorites</span>
					</Link>
				</ul>
			</div>
		</div>
	);
};

const MobileSidebar = () => {
	return (
		<div className="bg-white shadow-md bg-opacity-80 backdrop-blur-sm sm:hidden flex justify-center border-t items-center gap-10 w-full fixed left-0 bottom-0 p-2 z-10">
			<Link to="/">
				<MdOutlineHome className="w-6 h-6" />
			</Link>
			<Link to="/favorites">
				<FaRegHeart className="w-5 h-5" />
			</Link>
		</div>
	);
};
