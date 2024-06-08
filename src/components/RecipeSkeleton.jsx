export default function RecipeSkeleton() {
	return (
		<div className="animate-pulse flex flex-col bg-slate-100 rounded-md p-3 min-w-[250px]">
			<div className="h-48 bg-slate-200 rounded" />
			<div className="my-4 h-6 w-60 rounded-full bg-slate-200" />
			<div className="mb-2 h-5 w-40 rounded-full bg-slate-200" />

			<div className="flex space-x-2 mt-2">
				<div className="w-40 h-6 bg-slate-200 rounded-full" />
				<div className="w-40 h-6 bg-slate-200 rounded-full" />
			</div>
		</div>
	);
}
