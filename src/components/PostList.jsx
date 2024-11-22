// Importa o hook UsePosts, que gerencia o estado e a lógica de fetching de posts
import UsePosts from "../hooks/UsePosts";

const PostList = () => {
    // Chama o UsePosts para obter os posts e o estado de carregamento
    const { posts, loading } = UsePosts()
      // Exibe o texto "Carregando" enquanto os dados estão sendo carregados
    if(loading) return <p>Carregando</p>

    // Função para recarregar os posts
    const handleReload = () => {
        fetchData();// busca os dados novamente
      };

    return (
        <div>
            {/* Botão para recarregar os posts */}
            <button onClick={handleReload}>Recarregar</button>
                {/* Lista de posts */}
            <ul className="cards">
                {posts.map((post) => (
                    <li className="post-card" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList