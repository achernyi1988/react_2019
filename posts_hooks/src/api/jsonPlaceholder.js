import axios from "axios/index";
import {useState, useEffect} from "react"

const getResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResource = () => axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => setResources(response.data))


    useEffect(() => {
        fetchResource();
    }, [resource])

    return resources;
}

export default getResources;