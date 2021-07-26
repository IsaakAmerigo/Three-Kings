import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'https://lg-kings.herokuapp.com/api/books/',
    development: 'http://localhost:3000/api/books'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api