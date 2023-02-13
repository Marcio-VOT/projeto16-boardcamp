import { Router } from "express";
import {
  rentDelete,
  rentEndFromId,
  rentInsert,
  rentsList,
} from "../controllers/rents.js";
import { dataValidation } from "../middlewares/isValidData.js";
import { realCustomer } from "../middlewares/realCustomer.js";
import { realGame } from "../middlewares/realGame.js";
import { schema } from "../schemas/rentInfoSchema.js";

const RentRouter = Router();

RentRouter.get("/rentals", rentsList);
RentRouter.post("/rentals", dataValidation(schema), realCustomer, realGame, rentInsert);
RentRouter.post("/rentals/:id/return", rentEndFromId);
RentRouter.delete("/rentals/:id", rentDelete);

export default RentRouter;
