import express from "express";
import "dotenv/config";
import cors from "cors";
import { FRONT_URL } from "./helpers/constants";
import cookieParser from "cookie-parser";
import createRouter from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { app, server } from "./socket";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: FRONT_URL,
    methods: ["POST", "GET"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use("/api", createRouter());
app.use(errorHandler);

const port = Number(process.env.PORT) ?? 3001;

server.listen(port, () => {
  console.log(`🔥🚀 Server is running on port http://localhost:${port}`);
});
