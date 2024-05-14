import { drizzle } from "drizzle-orm/mysql2";
import process from "process";
import mysql from "mysql2/promise";
const connection = await mysql.createConnection({
  host: 'localhost',
  port: 33061,
  username: 'root',
  database: 'top_ideas',
});
const db = drizzle(connection);