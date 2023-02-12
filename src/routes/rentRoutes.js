import { Router } from "express";
import {
  rentDelete,
  rentEndFromId,
  rentInsert,
  rentsList,
} from "../controllers/rents.js";

const RentRouter = Router();

RentRouter.get("/rentals", rentsList);
RentRouter.post("/rentals", rentInsert);
RentRouter.post("/rentals/:id/return", rentEndFromId);
RentRouter.delete("/rentals/:id", rentDelete);

export default RentRouter;
