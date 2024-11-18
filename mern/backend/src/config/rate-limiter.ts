import type { Request } from "express";
import { rateLimit } from "express-rate-limit";
import envVariables from "./env-variables";

const rateLimiter = rateLimit({
    legacyHeaders: true,
    limit: envVariables.rateLimitMaxRequests,
    message: "Too many requests, please try again later.",
    standardHeaders: true,
    windowMs: 15 * 60 * envVariables.rateLimitMs,
    keyGenerator: (req: Request) => req.ip as string,
});

export default rateLimiter;
