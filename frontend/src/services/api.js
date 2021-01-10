import axios from 'axios';

//Initialize our API to request the info
const api = axios.create({
    baseURL: 'https://api-fitclub.herokuapp.com'
})

export default api;