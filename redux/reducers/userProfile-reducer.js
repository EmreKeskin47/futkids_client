import { GET_PROFILE } from "../actions/userProfile-actions";

const initialState = {
    user: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            state.user = action.user;
            return state;
    }
    return state;
};
