import UsePosts from "../hooks/UsePosts";

const PostList = () => {
    const { posts, loading } = UsePosts()
  
    if(loading) return <p>Carregando</p>

    const handleReload = () => {
        fetchData();
      };
    return (
        <div>
            <button onClick={handleReload}>Recarregar</button>
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