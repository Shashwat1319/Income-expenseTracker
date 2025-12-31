import express from "express";
import cors from "cors";

import DBConnect from "../DbConfig/DbConfig.js";
import router from "../Routes/Routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

export default async function handler(req, res) {
  await DBConnect();
  app(req, res);
}
