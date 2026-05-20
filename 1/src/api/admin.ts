 
import axios from "axios";
const baseURL = "https://fkxw9dcm-8000.inc1.devtunnels.ms/"
 
export const authApi = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: {
     
        
        
    }
})
