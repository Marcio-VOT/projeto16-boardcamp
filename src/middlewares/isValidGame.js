import { schema } from "../schemas/gamesInfoSchema.js"
 
export const gameValidation = (req, res, next)=>{
    const {error} = schema.validate(req.body)
    if(error) return res.sendStatus(400);
    next()
}  

