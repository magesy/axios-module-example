import axios from "axios";

class Openapi {
    constructor() {
        const baseURL = "https://api.publicapis.org"
        this.axios = axios.create({
            baseURL,
            timeout : 5000
        })
    }
        getEntries(){
            return this.axios.get('/entries');
        }
}

export default Openapi