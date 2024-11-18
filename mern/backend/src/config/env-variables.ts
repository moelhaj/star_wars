import Joi from "joi";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../.env") });

const envSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string()
            .valid("development", "test", "production")
            .required(),
        PORT: Joi.number().default(3500),
        CORS_ORIGIN: Joi.string().required(),
        RATE_LIMIT_MS: Joi.string().required(),
        RATE_LIMIT_MAX_REQUESTS: Joi.string().required(),
        STARWARS_API_URL: Joi.string().required(),
        IMAGE_API_URL: Joi.string().required(),
    })
    .unknown();

const { value: envVars, error } = envSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVariables = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    corsOrigin: envVars.CORS_ORIGIN,
    rateLimitMs: envVars.RATE_LIMIT_MS,
    rateLimitMaxRequests: envVars.RATE_LIMIT_MAX_REQUESTS,
    swApiUrl: envVars.STARWARS_API_URL,
    imageApiUrl: envVars.IMAGE_API_URL,
};

export default envVariables;
