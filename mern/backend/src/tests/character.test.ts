import supertest from "supertest";
import createServer from "../utils/server";

const app = createServer();

describe("characters", () => {
    describe("get characters", () => {
        it("should return array of characters", async () => {
            await supertest(app)
                .get("/api/v1/characters/1")
                .expect(200)
                .then((response) => {
                    expect(typeof response.body).toBe("object");
                    expect(response.body).toHaveProperty("count");
                    expect(response.body).toHaveProperty("next");
                    expect(response.body).toHaveProperty("previous");
                    expect(response.body).toHaveProperty("results");
                });
        });
    });
    describe("get character planet by id", () => {
        it("should return planet of character", async () => {
            await supertest(app)
                .get("/api/v1/characters/planet/1")
                .expect(200)
                .then((response) => {
                    expect(typeof response.body).toBe("object");
                    expect(response.body).toHaveProperty("climate");
                    expect(response.body).toHaveProperty("created");
                    expect(response.body).toHaveProperty("diameter");
                    expect(response.body).toHaveProperty("edited");
                    expect(response.body).toHaveProperty("films");
                    expect(response.body).toHaveProperty("gravity");
                    expect(response.body).toHaveProperty("name");
                    expect(response.body).toHaveProperty("orbital_period");
                    expect(response.body).toHaveProperty("population");
                    expect(response.body).toHaveProperty("residents");
                    expect(response.body).toHaveProperty("rotation_period");
                    expect(response.body).toHaveProperty("surface_water");
                    expect(response.body).toHaveProperty("terrain");
                    expect(response.body).toHaveProperty("url");
                });
        });
    });
});
