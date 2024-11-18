import envVariables from "../../config/env-variables";

export async function getPeople(page: number) {
    const results = await fetch(
        `${envVariables.swApiUrl}/people/?page=${page}`
    );
    const data = await results.json();
    return data;
}

export async function getPlanet(id: string) {
    const results = await fetch(`${envVariables.swApiUrl}/planets/${id}`);
    const data = await results.json();
    return data;
}
