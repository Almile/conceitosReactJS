import ApiClient from "./ApiClient"

export const getPosts = () => ApiClient.get('/posts')
export const addPost = (post) => ApiClient.post('/posts', post)
export const deletePost = (id) => ApiClient.delete(`/posts/${id}`)