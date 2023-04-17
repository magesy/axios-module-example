// axios class import example from file path
import Placeholder from "./classes/Placehoder.js";
import NASA from "./classes/NASA.js";
import Openapi from "./classes/Openapi.js";


const init = async () => {
    const placehoder = new Placeholder();
    const openapi = new Openapi();
    const nasa = new NASA('O9qmnfx7FUtojfwdqX0VlCvzh5ZJ8xN7lARZP3aa');

    
    const [ todos , entries, apod ] = await Promise.all([
        placehoder.getTodos(),
        openapi.getEntries(),
        nasa.getApod(),
    ])

        //console.log to see data from api
        console.log({
            todosLength : todos.data.length,
            entriesLength : entries.data.count,
            apodData : apod?.data
        });
    
}

init();