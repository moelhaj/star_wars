import type { Character } from "@/types/character";

export async function getCharacters(page: number) {
	const response = await fetch(`${process.env.API_URL}/people/?page=${page}`);
	const charactersResponse = await response.json();
	const data = charactersResponse.results.map(async (character: Character) => {
		const planetId = character.homeworld.split("/").filter(Boolean).pop() || "";
		const imageId = character.url.split("/").filter(Boolean).pop();
		if (character.species.length > 0) {
			const response = await fetch(character.species[0]);
			const species = await response.json();
			character.type = species.name || "Human";
		}
		character.image = `${process.env.IMAGE_API_URL}?random=${imageId}`;
		character.planet = await fetch(`${process.env.API_URL}/planets/${planetId}`).then(res =>
			res.json()
		);
		return character;
	});
	return {
		count: charactersResponse.count,
		previous: charactersResponse.previous,
		next: charactersResponse.next,
		results: await Promise.all(data),
		status: response.ok,
	};
}
