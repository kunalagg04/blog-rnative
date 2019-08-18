import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider value={5}>
        {children}
    </BlogContext.Provider>
}

//provider is used to store info to be transmitted to child comps.

export default BlogContext;