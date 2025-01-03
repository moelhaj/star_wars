/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: "node",
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    forceExit: true,
    // clearMocks: true,
    transform: {
        "^.+.tsx?$": ["ts-jest", {}],
    },
};
