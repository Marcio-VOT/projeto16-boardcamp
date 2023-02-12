import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const server = express();
server.use(cors());
server.use(express.json());

server.use([]);

server.listen(
  port,
  console.log(`Servidor iniciado com sucesso! Na porta: ${port}`)
);
