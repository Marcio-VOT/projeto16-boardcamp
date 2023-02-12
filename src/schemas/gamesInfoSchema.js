import Joi from "joi";

export const schema = Joi.object({
    name : Joi.string().required(),
    image : Joi.string().uri().required(),
    stockTotal: Joi.number().min(1).required(),
    pricePerDay: Joi.number().min(1).required()
});