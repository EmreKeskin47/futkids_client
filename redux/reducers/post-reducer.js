import {
    CREATE_POSTS,
    DELETE_POST,
    FETCH_POSTS,
    UPDATE_POST,
} from "../actions/post-actions";

const initialState = {
    posts: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            state.posts = action.posts;
            return state;
        case CREATE_POSTS:
            return state;
        case DELETE_POST:
            state.posts.filter((item) => item.id === action.id);
            return state;
        case UPDATE_POST:
            return state;
    }
    return state;
};
