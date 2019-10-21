
import axios, {AxiosInstance} from "axios";

const ep = process.env.NODE_ENV === "production" ? "https://api.atelier.seth-workshop.net" : "http://localhost:8444";

class API {

	private axios: AxiosInstance;

	constructor() {
		this.axios = axios.create({
			baseURL: ep,
			timeout: 1000
		});
	}

	public async get(endpoint: string, params?: any): Promise<any> {
		try {
			const {data} = await this.axios.get(endpoint, params);
			return data;
		} catch (e) {
			throw new Error("request failed");
		}
	}

	public async post(endpoint: string, params?: any): Promise<any> {
		try {
			const {data} = await this.axios.post(endpoint, params);
			return data;
		} catch (e) {
			throw new Error("request failed");
		}
	}

}

export default new API();
