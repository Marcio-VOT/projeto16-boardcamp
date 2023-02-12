import { Router } from "express";
import {
  clientFromId,
  clientInsert,
  clientsList,
  clientUpdate,
} from "../controllers/clients.js";

const ClientRouter = Router();

ClientRouter.get("/custumers", clientsList);
ClientRouter.get("/custumers/:id", clientFromId);
ClientRouter.post("/custumers", clientInsert);
ClientRouter.put("/custumers/:id", clientUpdate);

export default ClientRouter;
