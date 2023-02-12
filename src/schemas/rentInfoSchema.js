import Joi from "joi";

export const schema = Joi.object({
    customerId : Joi.number().min(0).required(),
    gameId : Joi.number().min(0).required(),
    daysRented : Joi.number().min(1).required(),
})