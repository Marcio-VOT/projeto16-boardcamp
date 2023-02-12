import { db } from "../config/database.js";

export async function gamesList(req, res) {
    try {
        const result = await db.query("SELECT * FROM games;")
        res.send(result.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function gameInsert(req, res) {
    try {
        const { name, image, stockTotal, pricePerDay} = req.body;
        await db.query(`INSERT INTO games(name,image,"stockTotal","pricePerDay") VALUES ($1,$2,$3,$4);`,
        [name, image, stockTotal, pricePerDay]);
        res.sendStatus(201);
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}
