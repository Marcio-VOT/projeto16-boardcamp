import { Router } from "express";
import { gameInsert, gamesList } from "../controllers/games.js";
import { dupGame } from "../middlewares/duplicatedGame.js";
import { gameValidation } from "../middlewares/isValidGame.js";

const GamesRouter = Router();

GamesRouter.get("/games", gamesList);
GamesRouter.post("/games", gameValidation, dupGame, gameInsert);

export default GamesRouter;
