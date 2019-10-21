
import {Pool} from "pg";

const pool = process.env.NODE_ENV === "production"? 
new Pool({
	host: "db",
	user: "postgres",
	password: "240UAPsjgdyTETIj96BmLAIw256",
	database: "Catz"
})
: new Pool({
	host: "localhost",
	user: "postgres",
	port: 5430,
	password: "240UAPsjgdyTETIj96BmLAIw256",
	database: "Catz",
});

export const query = async (query: string, values?: any[]) => {
	const {rows} = await pool.query(query, values);
	return rows;
}

