import { Router } from "express";
import { gameInsert, gamesList } from "../controllers/games.js";

const GamesRouter = Router();

GamesRouter.get("/games", gamesList);
GamesRouter.post("/games", gameInsert);

export default GamesRouter;
