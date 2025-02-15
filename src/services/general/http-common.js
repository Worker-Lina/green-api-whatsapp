import axios from "axios";
import {apiBaseUrl, interceptorsConfig} from "../CONSTANTS";

const instance = axios.create({baseURL: apiBaseUrl});

instance.interceptors.request.use(interceptorsConfig);

export default instance;