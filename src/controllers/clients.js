import { db } from "../config/database.js";

export async function clientsList(req, res) {
    try {
        const {rows} = await db.query('SELECT * FROM customers;')
        res.send(rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function clientFromId(req, res) {
    try {
        const { id } = req.params;
        const resp = await db.query('SELECT * FROM customers WHERE id = $1;', [id]);
        if(!resp.rowCount) return res.sendStatus(404);
        res.send(resp.rows);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function clientInsert(req, res) {
    try {
        const {name, phone, cpf, birthday} = req.body;
        await db.query('INSERT INTO customers(name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);', [name, phone, cpf, birthday]);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function clientUpdate(req, res) {
    try {
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}
