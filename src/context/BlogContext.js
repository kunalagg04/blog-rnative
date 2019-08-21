import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost' :
            return [...state , {id: Math.floor(Math.random() * 9999) ,  title : `Blog Post ${state.length + 1}`}];
        default:
            return state;
    }
};

// const addBlogPost = () => {
//     dispatch({type : 'add_blogpost'});
// }

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type : 'add_blogpost'});
    };
};

const deleteBlogPost = (dispatch) => {
//doubt : id kahan se aayi bc
    return (id) => {
        dispatch({type : 'add_blogpost' , payload: id});
    };
};

export const { Context , Provider } = createDataContext(
    blogReducer,
    { addBlogPost , deleteBlogPost },
    []
);