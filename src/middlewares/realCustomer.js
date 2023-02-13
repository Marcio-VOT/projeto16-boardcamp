import { db } from "../config/database.js"

export const realCustomer = async (req, res, next)=>{
    try {
        const {customerId} = req.body;
        const { rowCount } = await db.query(`SELECT * FROM customers WHERE id=$1;`, [customerId])
        if(!rowCount) return res.sendStatus(400)
        next()
    } catch (error) {
        res.status(500).send(error.message)
    }
}