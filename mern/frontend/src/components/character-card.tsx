"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { Character } from "@/lib/types";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bot } from "lucide-react";

export default function CharacterCard({ character }: { character: Character }) {
	const [open, setOpen] = useState(false);

	const charVariants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<motion.div
					variants={charVariants}
					transition={{ duration: 0.1 }}
					className="border-2 w-full h-full overflow-hidden rounded-3xl relative group cursor-pointer hover:ring-2 hover:ring-primary duration-300"
				>
					<img
						src={character.image || "/default-image.jpg"}
						alt={character.name}
						className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300 transform"
					/>
					{character.type === "Droid" && (
						<div className="absolute top-3 right-3 p-1 bg-primary text-white grid place-content-center rounded-xl">
							<Bot className="h-4 w-4" />
						</div>
					)}
					<div className="bg-black/50 group-hover:bg-black/70 absolute bottom-0 left-0 right-0 p-4 duration-300 text-white">
						<div className="flex gap-2 items-center">
							<h1 className="text-lg font-bold">{character.name}</h1>
						</div>
					</div>
				</motion.div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{character.name}</DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				<div className="space-y-4">
					<div className="space-y-1">
						<p>Height: {character.height} m</p>
						<p>Mass: {character.mass} kg</p>
						<p>Birth Year: {character.birth_year}</p>
						<p>Create at: {dayjs(character.created).format("DD-MM-YYYY")}</p>
						<p>Appeared in: {character.films.length} movies</p>
					</div>
					<div className="bg-white/10 p-4 rounded-lg space-y-1">
						<h1 className="text-lg font-bold">Home planet information</h1>
						<p>Home planet: {character?.planet?.name}</p>
						<p>Terrain: {character?.planet?.terrain}</p>
						<p>climate: {character?.planet?.climate}</p>
						<p>Home name: {character?.planet?.name}</p>
						<p>Number of residents: {character?.planet?.population}</p>
					</div>
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
