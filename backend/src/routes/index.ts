import {Request, Response, Router} from "express";

export {cats} from "./cats";

// eslint-disable-next-line new-cap
export const root = Router();

root.get("/", (req: Request, res: Response) => {
	res.status(200).json({hello: "World"});
});
