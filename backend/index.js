import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";

import cors from "cors";
import { connect } from "node:http2";
import { connectToSocket } from "./src/controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.set("port", process.env.port || 8080);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://battibharadwaj123:CVTbUC7HtospPvlp@cluster0.gaajw.mongodb.net/"
  );
  console.log(`MONGO connected DB host: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("listening on port: 8080");
  });
};
start();
