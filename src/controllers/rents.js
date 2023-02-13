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
        await db.query('INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES($1, $2, $3, $4, $5, $6, $7);',[customerId, gameId, dayjs(), daysRented, null, originalPrice, null] );
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function rentEndFromId(req, res) {
    try {
        const { id } = req.params;
        const rental = await db.query(`SELECT * FROM rentals WHERE id=$1;`, [id]);
        const { rows } = await db.query(`SELECT * FROM games WHERE id=$1;`, [rental.rows[0].gameId])
        if (!rental.rowCount) return res.sendStatus(404);
        if(rental.rows[0].returnDate !== null) return res.sendStatus(400);
        let delay = Number(dayjs(dayjs() - rental.rows[0].rentDate).format('DD'));
        if(rental.rows[0].daysRented >= delay){
            delay = 0
        }else{
            delay = delay - rental.rows[0].daysRented - 1;
        }
        delay = delay*rows[0].pricePerDay;
        await db.query(`
        UPDATE rentals 
        SET "returnDate"=$1 , "delayFee"=$2
        WHERE id=$3;`,[dayjs(), delay, id]);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function rentDelete(req, res) {
    try {
        const { id } = req.params;
        const rental = await db.query(`SELECT * FROM rentals WHERE id=$1;`, [id]);
        if (!rental.rowCount) return res.sendStatus(404);
        if(rental.rows[0].returnDate === null) return res.sendStatus(400);

        await db.query(`DELETE FROM rentals WHERE id=$1;`, [id]);
        res.sendStatus(200)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}
