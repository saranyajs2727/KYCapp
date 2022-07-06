import { SET_USER_NAME, SET_EMAIL, SET_MOBILE,SET_PINCODE,SET_ACCNAME,SET_ACCNUM,SET_NUMBER,SET_IFSC, SET_IMAGE} from "./action";

const initialState = {
    name:'',
    email:'',
    mobile:'',
    pincode:'',
    accname:'',
    accnum:'',
    number:'',
    ifsc:'',
    img:'',
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
        case SET_ACCNAME:
            return { ...state, accname: action.payload };
        case SET_ACCNUM:
           return { ...state, accnum: action.payload };
        case SET_NUMBER:
            return { ...state, number: action.payload }
        case SET_IFSC:
            return { ...state, ifsc: action.payload }
         case SET_IMAGE:
                return { ...state, img: action.payload }
        default:
            return state;
    }
}

export default userReducer;

