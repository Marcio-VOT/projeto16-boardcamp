import { db } from "../config/database.js"

export const dupCpf = async (req, res, next)=>{
    try {
        const { id } = req.params;
        const resp = await db.query('SELECT * FROM customers WHERE cpf = $1;', [req.body.cpf]);
        if(!id){
            if(resp.rowCount) return res.sendStatus(409);
        }else{
            if(resp.rowCount && id != resp.rows[0].id) return res.sendStatus(409);
        }
        next();
    } catch (error) {
        res.status(500).send(error.message)
    }
}