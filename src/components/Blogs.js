import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([{id: 0, title: "Titel", text: "Massa text", hidden: "False"}])

    return (
        <div class="border">
        {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}        
        </div>      
    )

}

export default Blogs;