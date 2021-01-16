import React from "react"
import Elements from "./myBlogElements"
import "./myBlog.css"
function MyBlog(){
    return (
        <div>
            <h1 className="main_title">Our Blog</h1>
        <ul className="boxes">
            <li><Elements title="Aliquam Hendrerit Mi Metus"/></li>
            <li><Elements title="Mauris Vulputate Cras Amet"/></li>
            <li><Elements title ="Suspendisse Nullam Sodales"/></li>
        </ul>
            
        </div>
    
    )
}
export default MyBlog