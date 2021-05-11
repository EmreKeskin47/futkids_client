import { GET_PROFILE } from "../actions/userProfile-actions";

const initialState = {
    id: " ",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            state.id = action.pid;
            return state;
    }
    return state;
};
