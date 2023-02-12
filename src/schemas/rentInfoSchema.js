import Joi from "joi";

export const schema = Joi.object({
    customerId : Joi.required().number().min(0),
    gameId : Joi.required().number().min(0),
    daysRented : Joi.required().number().min(1),
})