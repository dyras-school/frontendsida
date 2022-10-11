import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([{id: 0, title: "", text: "", hidden: ""}])

    useEffect(() => {

       const fetchBlogs = async () => {

        let response = await fetch("http://localhost:8675/api/blog");
        let blogs = await response.json()

        setBlogs(blogs);

        console.log(blogs);
       }
            
        fetchBlogs();

    }, [])

    return (
        
        <div>
        {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
        </div>  
        
    )

}

export default Blogs; 