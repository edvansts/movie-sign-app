import axios from "axios";
import { API_URL } from "@env";

const CLIENT_API = axios.create({ baseURL: API_URL });

export { CLIENT_API };
