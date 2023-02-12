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

ClientRouter.get("/customers", clientsList);
ClientRouter.get("/customers/:id", clientFromId);
ClientRouter.post("/customers", dataValidation(schema), dupCpf, clientInsert);
ClientRouter.put("/customers/:id", dataValidation(schema), dupCpf, clientUpdate);

export default ClientRouter;
