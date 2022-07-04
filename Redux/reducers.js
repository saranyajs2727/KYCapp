import { SET_USER_NAME, SET_EMAIL, SET_MOBILE,SET_PINCODE} from "./action";

const initialState = {
    name:'',
    email:'',
    mobile:'',
    pincode:'',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, text: action.payload };
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_MOBILE:
                return { ...state, mobile: action.payload };
        case SET_PINCODE:
                    return { ...state, pincode: action.payload };
        default:
            return state;
    }
}

export default userReducer;

