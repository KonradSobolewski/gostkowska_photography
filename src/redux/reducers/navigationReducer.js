import { SHOW_NAV, HIDE_NAV } from "../actions/navigationActions";

const initialState = {
    show: true
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAV:
            return {
                ...state,
                show: true,
            };
        case HIDE_NAV:
            return {
                ...state,
                show: false
            };
        default:
            return state;

    }
};

export default navigationReducer;