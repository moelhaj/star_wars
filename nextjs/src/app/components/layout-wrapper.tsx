"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CharacterCard from "./character-card";
import type { Character } from "@/types/character";
import Pagination from "./pagination";

type Props = {
	data: Character[];
	page: number;
	count: number;
	previous: string | null;
};

export default function LayoutWrapper({ data, page, count, previous }: Props) {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [data]);

	return (
		<>
			<div className="max-w-7xl mx-auto flex flex-col gap4 pb-4 relative">
				{loading && (
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
						{data.map((item: Character) => (
							<CharacterCard key={item.name} character={item} />
						))}
					</motion.div>
				</AnimatePresence>
			</div>
			<Pagination count={count} page={page} previous={previous} />
		</>
	);
}
