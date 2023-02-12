import express from "express";
import cors from "cors";
import Rent from "./routes/rentRoutes.js";
import Client from "./routes/clientRoutes.js";
import Games from "./routes/gamesRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const server = express();
server.use(cors());
server.use(express.json());

server.use([Rent, Client, Games]); 

server.listen(
  port,
  () => console.log(`Servidor iniciado com sucesso! Na porta: ${port}`)
); 
