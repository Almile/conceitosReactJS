import axios from 'axios'
// Importa a biblioteca axios, que facilita a realização de requisições HTTP

const ApiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',// Define a URL base para requisição do posts
    timeout: 10000 // Define um tempo máximo de espera de requisição
})

export default ApiClient
