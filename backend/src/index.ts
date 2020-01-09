import { config } from "dotenv";

config();

import app from "./createServer";

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`),
);
