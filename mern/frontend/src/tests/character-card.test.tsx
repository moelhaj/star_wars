import { render, screen } from "@testing-library/react";
import CharacterCard from "@/components/character-card";
import "@testing-library/jest-dom";
import { Character } from "@/lib/types";

const character: Character = {
	name: "Luke Skywalker",
	height: "172",
	mass: "77",
	hair_color: "blond",
	skin_color: "fair",
	eye_color: "blue",
	birth_year: "19BBY",
	gender: "male",
	homeworld: "https://swapi.dev/api/planets/1/",
	films: [
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/7/",
	],
	species: ["https://swapi.dev/api/species/1/"],
	vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
	starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
	created: "2014-12-09T13:50:51.644000Z",
	edited: "2014-12-20T21:17:56.891000Z",
	url: "https://swapi.dev/api/people/1/",
	image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	type: "",
	planet: {
		climate: "Arid",
		created: "2014-12-09T13:50:49.641000Z",
		diameter: "10465",
		edited: "2014-12-15T13:48:16.167217Z",
		films: ["https://swapi.dev/api/films/1/"],
		gravity: "1",
		name: "Tatooine",
		orbital_period: "304",
		population: "120000",
		residents: ["https://swapi.dev/api/people/1/"],
		rotation_period: "23",
		surface_water: "1",
		terrain: "Dessert",
		url: "https://swapi.dev/api/planets/1/",
	},
};

test("renders character card", () => {
	render(<CharacterCard character={character} />);
	const name = screen.getByText(/Luke Skywalker/i);
	// const status = screen.getByText(/Alive/i);
	// const species = screen.getByText(/Human/i);
	// const gender = screen.getByText(/Male/i);
	// const origin = screen.getByText(/Earth/i);
	// const location = screen.getByText(/Earth/i);
	// const image = screen.getByAltText(/Rick Sanchez/i);
	expect(name).toBeInTheDocument();
	// expect(status).toBeInTheDocument();
	// expect(species).toBeInTheDocument();
	// expect(gender).toBeInTheDocument();
	// expect(origin).toBeInTheDocument();
	// expect(location).toBeInTheDocument();
	// expect(image).toBeInTheDocument();
});
