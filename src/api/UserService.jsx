import ApiClient from "./ApiClient"

export const getPosts = () => ApiClient.get('/posts')
// Exporta ApiClient com link para /posts