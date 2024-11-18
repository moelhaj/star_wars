import { Request, Response } from "express";
import * as services from "./character.services";
import { StatusCodes } from "http-status-codes";
import type { charactersList, planet } from "../../types";
import envVariables from "../../config/env-variables";

export const getAll = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { page } = req.params;
        if (isNaN(parseInt(page))) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .send("Invalid page number");
        }
        const response: charactersList = (await services.getPeople(
            parseInt(page)
        )) as charactersList;

        response.results.map(async (character) => {
            const imageId = character.url.split("/").filter(Boolean).pop();
            const planetId =
                character.homeworld.split("/").filter(Boolean).pop() || "";
            character.image = `${envVariables.imageApiUrl}?random=${imageId}`;
            character.planet = await fetch(
                `${envVariables.swApiUrl}/planets/${planetId}`
            ).then(async (res) => (await res.json()) as planet);
            return character;
        });

        return res.status(StatusCodes.OK).send({
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results,
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
};
