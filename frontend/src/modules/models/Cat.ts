
export interface ICat {
	link: string;
	id: string;
	rank: number;
}

export class Cat implements ICat {

	public link: string;
	public id: string;
	public rank: number;

	constructor(cat: ICat) {
		this.link = cat.link;
		this.id = cat.id;
		this.rank = cat.rank;
	}
}
