
import axios from "axios"

export default axios.create({
        baseURL: "https://api.unsplash.com/",
        headers: {
            Authorization: "Client-ID 24556f22f0fa8aa57bb2ebfcff4480950c7ee3b9ad01a78f708368c003e962db"
        }
});