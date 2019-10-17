const fs = require('fs');
const { promisify } = require('util');
const {Pool} = require("pg");

const pool = new Pool({
	user: "postgres",
	database: "Catz",
	password: "240UAPsjgdyTETIj96BmLAIw256",
	host: "localhost",
	port: 5430
})

const readFile = promisify(fs.readFile);
const query = 'INSERT INTO cats(uid, link) VALUES ($1, $2)';

readFile(process.argv[2], "utf-8").then(buf => {
	let { images } = JSON.parse(buf);

	return Promise.all(images.map(({id: uid, url: link}) => pool.query(query, [uid, link])));
}).then((r, e) => {
	console.log(r, e);
});


