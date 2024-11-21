import { useState, useEffect } from 'react'
import { getPosts } from '../api/UserService'

const UsePosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPosts()
                setPosts(response.data)
            } catch (error) {
                console.error('Erro ao carregar os posts: ', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return { posts, loading }
}

export default UsePosts
