//this file is context file without reducer use . 
// We can refactor thi to use reducer simply . REFER --> VID. 126


import React ,{ useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const[blogPosts , setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts , {title: `Blog Post #${blogPosts.length + 1} ` }])
    };

    return <BlogContext.Provider value={{ data : blogPosts , addBlogPost : addBlogPost }}>
        {children}
    </BlogContext.Provider>
}

//provider is used to store info to be transmitted to child comps.

export default BlogContext; 