import { useGetCharactersQuery } from "@/app/services/character";
import CharacterCard from "@/components/character-card";
import type { Character } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Error from "./components/error";
import Loader from "./components/loader";
import Pagination from "./components/pagination";

export default function App() {
	const [page, setPage] = useState<number>(1);
	const { data, isLoading, isFetching, isError } = useGetCharactersQuery(page.toString());

	console.log(data);

	if (isLoading || isFetching) return <Loader />;
	if (isError) return <Error />;

	return (
		<>
			<div className="max-w-7xl mx-auto flex flex-col gap4 pb-4 relative">
				{(isLoading || isFetching) && (
					<div className="absolute z-20 bg-black/80 w-full h-full grid place-content-center">
						Loading
					</div>
				)}
				<div className="p-4 mt-2">
					<h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
						Star Wars Character
					</h2>
				</div>
				<AnimatePresence>
					<motion.div
						initial="hidden"
						animate="show"
						transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
						className="grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
					>
						{data?.results.map((item: Character) => (
							<CharacterCard key={item.name} character={item} />
						))}
					</motion.div>
				</AnimatePresence>
			</div>
			<Pagination page={page} setPage={setPage} count={data?.count} />
		</>
	);
}
