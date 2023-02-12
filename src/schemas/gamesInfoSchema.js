import Joi from "joi";

export const schema = Joi.object({
    name : Joi.required().string(),
    image : Joi.required().string().uri(),
    stockTotal: Joi.required().number().min(1),
    pricePerDay: Joi.required().number().min(1)
});