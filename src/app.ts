import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { routes } from "./routes";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1", routes);

export default app;
