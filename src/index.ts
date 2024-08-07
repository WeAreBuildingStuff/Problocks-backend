import * as dotenv from "dotenv";
import createServer from "./utils/createServer";
import cors from "cors";

dotenv.config({ path: ".env" });

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200
};

const port = process.env.PORT || 8080
const app = createServer();

app.use(cors(corsOptions));

app.listen(port , () => {
  console.log(`[SERVER]: is running at https://localhost:${port}`)
})