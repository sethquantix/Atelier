import {Cat, ICat} from "@/modules/models/Cat";
import API from "@/modules/api";

enum CatEndpoints {
	LIST = "/cats/list",
	PAIR = "/cats/pair",
	RANK = "/cats/rank"
}

export class CatResource {

	static async list(): Promise<Cat[]> {
		const list = await (API.get(CatEndpoints.LIST) as Promise<ICat[]>);
		console.log(list);
		return list.map((e) => new Cat(e));
	}

	static async pair(): Promise<Cat[]> {
		const pair = await (API.get(CatEndpoints.PAIR) as Promise<ICat[]>);
		return pair.map((e) => new Cat(e));
	}

	static async rank(params: {left: Cat, right: Cat, win: number}): Promise<boolean> {
		return await (API.post(CatEndpoints.RANK, params));
	}

}
