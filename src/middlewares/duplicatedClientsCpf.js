import { response } from "express";
import { db } from "../config/database.js"

export const dupCpf = (req, res, next)=>{
    try {
        const { rowsCount } = db.query('SELECT * FROM customers WHERE cpf = $1;', [req.body.cpf]);
        if(rowsCount) return res.sendStatus(409);
        next();
    } catch (error) {
        res.status(500).send(error.message)
    }
}