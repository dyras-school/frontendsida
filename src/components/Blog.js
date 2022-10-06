const Blog = (props) => {

    const { blog: blog } = props;

    return (
        <div> 
            <h2>{blog.title}</h2>
            <p>{blog.text}</p>
        </div>
    )
}

export default Blog;