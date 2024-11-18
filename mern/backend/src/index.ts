import envVariables from "./config/env-variables";

import createServer from "./utils/server";
const app = createServer();

app.listen(envVariables.port, () =>
    console.log(`Server is running at port: ${envVariables.port}`)
);
