import Joi from "joi";

export const schema = Joi.object({
    name : Joi.required().string(),
    phone : Joi.required().string().min(10).max(11),
    cpf : Joi.required().string().length(11),
    birthday : Joi.required().date()
})