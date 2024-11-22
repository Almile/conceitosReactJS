import { useState, useEffect } from 'react'
import { getPosts } from '../api/UserService'// Importa a função `getPosts

const UsePosts = () => {
    // Define o estado para guardar os posts e o estado de carregamento
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Função assíncrona que busca os dados
        const fetchData = async () => {
            try {
                 // Chama a função `getPosts`, que faz a requisição à API e retorna os posts
                const response = await getPosts()
                //atualiza o setPosts com os dados retornados
                setPosts(response.data)
            } catch (error) {
                console.error('Erro ao carregar os posts: ', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    // Retorna os dados dos posts e o estado de carregamento para que possam ser utilizados por outros componentes
    return { posts, loading }
}

export default UsePosts
