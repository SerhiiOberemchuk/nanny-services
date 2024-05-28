import axios from "axios";
import { BASE_BACKEND_URL } from "../Constans/constans";

export const instansApi = axios.create({ baseURL: BASE_BACKEND_URL });
