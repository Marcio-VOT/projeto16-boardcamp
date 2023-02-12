import { db } from "../config/database.js"

export const dupCpf = (req, res, next)=>{
    try {
        const { id } = req.params;
        const resp = db.query('SELECT * FROM customers WHERE cpf = $1;', [req.body.cpf]);
        if(!id){
            if(resp.rowsCount) return res.sendStatus(409);
        }else{
            if(resp.rowsCount && Number(id) !== resp.rows[0].id) return res.sendStatus(409);
        }
        next();
    } catch (error) {
        res.status(500).send(error.message)
    }
}