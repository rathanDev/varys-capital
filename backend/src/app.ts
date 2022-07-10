import express from "express";
import cors from "cors";
import analyzeCodeHandler from "./controller/code.controller";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.route("/analyze").post(analyzeCodeHandler);

const port = process.env.PORT;
app.listen(Number(port), () => {
  console.log(`App listening at port ${port}`);
});
