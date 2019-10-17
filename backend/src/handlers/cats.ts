
import {query} from "../driver";

const listQuery = "SELECT * from cats ORDER BY cats.rank DESC";

const updateQuery = "UPDATE cats SET rank = rank + $1 WHERE id = $2";

export const list = async () => query(listQuery);

export const update = async (id: string, score: number) =>
	query(updateQuery, [score, id]);


