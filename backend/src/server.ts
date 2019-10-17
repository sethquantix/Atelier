import App from "./App";

const start = () => {
	App.express.listen(8444);
	console.log("server started on " + 8444);
}

start();
