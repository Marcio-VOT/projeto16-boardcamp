import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Poll } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.MODE === "prod") configDatabase.ssl = true;

export const db = new Poll(configDatabase);
