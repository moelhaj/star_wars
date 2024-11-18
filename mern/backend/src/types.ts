export type character = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
    image?: string;
    planet?: planet;
    type?: string;
};

export type charactersList = {
    count: number;
    next: string;
    previous: string;
    results: character[];
};

export type planet = {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: string[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
};
