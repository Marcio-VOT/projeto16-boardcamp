import { Router } from "express";
import {
  clientFromId,
  clientInsert,
  clientsList,
  clientUpdate,
} from "../controllers/clients.js";
import { dupCpf } from "../middlewares/duplicatedClientsCpf.js";
import { dataValidation } from "../middlewares/isValidData.js";
import { schema } from "../schemas/clientsInfoSchema.js"

const ClientRouter = Router();

ClientRouter.get("/custumers", clientsList);
ClientRouter.get("/custumers/:id", clientFromId);
ClientRouter.post("/custumers", dataValidation(schema), dupCpf, clientInsert);
ClientRouter.put("/custumers/:id", clientUpdate);

export default ClientRouter;
