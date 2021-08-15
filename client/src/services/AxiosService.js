import axios from 'axios';
import {API} from "../backend";

class AxiosService {
    axiosInstance = null;

    constructor() {
        this.initInstance();
    }

    initInstance() {
        this.axiosInstance = axios.create({
            baseURL: `${API}/api`,
            timeout: 5000,
            headers: {
                post: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        });
    }

    get studentAxios() {
        return this.axiosInstance;
    }
}

export default new AxiosService();