// eslint-disable-next-line no-unused-vars
import express, {Express, Router as Router} from "express";
import * as routes from "./routes";

import cors from "cors";
import morgan from "morgan";

export const PORT = 4242;

class App {
	public express: Express;

	constructor() {
		this.express = express();
		this.mountRoutes();
	}

	public get port(): number {
		return PORT;
	}

	private mountRoutes(): void {
		console.log(routes);
		this.express.use(cors());
		this.express.use(morgan("combined"));
		this.express.use("/", routes.root);
		this.express.use("/cats", routes.cats);
	}
}

export default new App();
