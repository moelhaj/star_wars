import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import express, { type Express } from "express";
import envVariables from "../config/env-variables";
import errorHandler from "../config/error-handler";
import rateLimiter from "../config/rate-limiter";
import routes from "../api";

export const app: Express = express();

export default function createServer() {
    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({ origin: envVariables.corsOrigin, credentials: true }));
    app.use(helmet());
    app.use(rateLimiter);
    if (envVariables.env === "development") {
        app.use(morgan("dev"));
    }

    // Routes
    app.use("/api/v1", routes);
    app.use(errorHandler());

    return app;
}
