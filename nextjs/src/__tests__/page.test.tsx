import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";
import CharacterCard from "@/app/components/character-card";

type SearchParams = {
	page?: string;
};

test("Page", () => {
	render(<Page searchParams={Promise.resolve({} as SearchParams)} />);
});

test("CharacterCard", () => {
	render(
		<CharacterCard
			character={{
				name: "Rick Sanchez",
				height: "180",
				mass: "75",
				hair_color: "blue",
				skin_color: "unknown",
				eye_color: "brown",
				birth_year: "19BBY",
				gender: "male",
				homeworld: "Earth (C-137)",
				films: ["https://rickandmortyapi.com/api/film/1/"],
				species: [],
				vehicles: [],
				starships: [],
				created: "2014-12-09T13:50:51.644000Z",
				edited: "2014-12-20T21:17:56.891000Z",
				url: "https://rickandmortyapi.com/api/character/1/",
				image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
				type: "Droid",
				planet: {
					name: "Earth (Replacement Dimension)",
					rotation_period: "24",
					orbital_period: "365",
					diameter: "10000",
					climate: "unknown",
					gravity: "1 standard",
					terrain: "unknown",
					surface_water: "unknown",
					population: "unknown",
					residents: [],
					films: [],
					created: "2014-12-09T13:50:49.641000Z",
					edited: "2014-12-21T20:48:04.175778Z",
					url: "https://rickandmortyapi.com/api/planet/1/",
				},
			}}
		/>
	);
	expect(screen.getByText("Rick Sanchez")).not.toBeNull();
});
