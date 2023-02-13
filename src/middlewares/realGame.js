import { db } from "../config/database.js"

export const realGame = async (req, res, next)=>{
    try {
        const {gameId} = req.body;
        const games = await db.query(`SELECT * FROM games WHERE id=$1;`, [gameId])
        const rented = await db.query(`SELECT * FROM rentals WHERE "gameId"=$1;`,[gameId])
        if(!games.rowCount || rented.rowCount >= games.rows[0].stockTotal) return res.sendStatus(400)
        next()
    } catch (error) {
        res.status(500).send(error.message)
    }
}