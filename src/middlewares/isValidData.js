export const dataValidation = (schema)=>{
    return ( req, res , next)=>{
        const {error} = schema.validate(req.body, { abortEarly: false })
        if(error) return res.sendStatus(400);
        next();
    }  
}

