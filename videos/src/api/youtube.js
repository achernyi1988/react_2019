import axios from "axios";

const KEY = "AIzaSyD22MJwCE8yYt0L8y95AGw3imHqsh0Tass";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        maxResults: 5,
        key: KEY
    }
});
