//learn to handle api with axios 
//form https://www.youtube.com/watch?v=xDVtXgcu1_A [no //document]
import axios from "axios"; // import axios

// const api link by name = apiLink
const JSON_PLACE_HOLDER = "https://jsonplaceholder.typicode.com"
const OPEN_API = "https://api.publicapis.org"
const NASA = "https://api.nasa.gov/planetary" // need to register and have api key

// api get by axios
const init = async () => {
    try {
        const API1 = axios.get(`${JSON_PLACE_HOLDER}/todos`)
        const API2 = axios.get(`${OPEN_API}/entries`)
        // api3 is api_key needed
        const API3 = axios.get(`${NASA}/apod?api_key=O9qmnfx7FUtojfwdqX0VlCvzh5ZJ8xN7lARZP3aa`)

        // make await promise to all api1,2,3
        const [ todos, entries, apod,] = await Promise.all([
            API1,
            API2,
            API3,
        ])

        //console.log to see data from api
        console.log({
            todosLength : todos.data.length,
            entriesLength : entries.data.count,
            apodData : apod?.data
        });

    } catch (error) {
        console.log(error);
    }
}

init();