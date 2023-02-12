import { Router } from "express";
import { gameInsert, gamesList } from "../controllers/games.js";
import { dupGame } from "../middlewares/duplicatedGame.js";
import { dataValidation } from "../middlewares/isValidData.js";
import { schema } from "../schemas/gamesInfoSchema.js"

const GamesRouter = Router();

GamesRouter.get("/games", gamesList);
GamesRouter.post("/games", dataValidation(schema), dupGame, gameInsert);

export default GamesRouter;
