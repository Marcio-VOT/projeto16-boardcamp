import { db } from "../config/database.js"

export const dupGame = async (req, res, next)=>{
    try {
        const {rowCount} = await db.query(`SELECT * FROM games WHERE name = $1;`, [req.body.name]);
        if(rowCount) return res.sendStatus(409);
        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}