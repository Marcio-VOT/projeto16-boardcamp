import { db } from "../config/database.js";
import dayjs from "dayjs";

export async function rentsList(req, res) {
    try {
        const { rows } = await db.query(`
        SELECT rentals.*,
        JSON_BUILD_OBJECT('id', customers.id, 'name', customers.name) AS customer,
        JSON_BUILD_OBJECT('id', games.id, 'name', games.name) AS game
        FROM rentals 
        JOIN customers 
        ON rentals."customerId"=customers.id
        JOIN games
        ON rentals."gameId" = games.id;
        `)
        res.send(rows);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function rentInsert(req, res) {
    try {
        const { customerId, gameId, daysRented} = req.body;
        const { rows } = await db.query('SELECT * FROM games WHERE id=$1;', [gameId]);
        const originalPrice = rows[0].pricePerDay*daysRented;
        console.log(req.body, rows, originalPrice)
        await db.query('INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES($1, $2, $3, $4, $5, $6, $7);',[customerId, gameId, dayjs().format('YYYY-MM-DD'), daysRented, null, originalPrice, null] );
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function rentEndFromId(req, res) {
    try {
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function rentDelete(req, res) {
    try {
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}
