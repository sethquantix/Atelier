
import {Router as router, json as jsonParser} from "express";

import {Cats} from "../handlers";
import {ICat as Cat} from "../models";

const json = jsonParser({limit: "1mb"});

console.log(router);
export const cats = router();

cats.get("/", (req, res) => {
	console.log("/");
	res.send({hello: "world"});
});

cats.get("/list", async (req, res) => {
	const list = await Cats.list();
	res.send(list);
});


cats.get("/pair", async (req, res) => {
	const list = await Cats.list();
	const s = list.length * 63;
	const first = Math.floor(Math.random() * s) % list.length;
	let second = first;
	while (second === first) {
		second = Math.floor(Math.random() * s) % list.length;
	}
	res.send([list[first], list[second]]);
})


interface IRankProps {
	left: Cat;
	right: Cat;
	win: number;
}

cats.post("/rank", json, async (req, res) => {
	try {
		const {left, right, win} = req.body as IRankProps;
		const ea = 1 / (1 + Math.pow(10, (right.rank - left.rank) / 400));
		const eb = 1 - ea;
		const wa = win === 0 ? 1 : -1;
		const wb = win === 1 ? 1 : -1;
		const lg = Math.floor(32 * (wa - ea));
		const lr = Math.floor(32 * (wb - eb));
		await Cats.update(left.id, lg);
		await Cats.update(right.id, lr);
		res.send(true);
	} catch {
		res.send(false);
	}
})
