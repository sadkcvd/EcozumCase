// import * as actionTypes from "../actions/actionTypes"
const initialState ={
    LoggedIn: true,
    loginProcessing: false,
    user: 
    {
        fullName: "{Name, Surname}",
        email: "",
    },
};

export default function loginReducer (state, action){
    switch (action.type) {
        case "LOGINPROCESSING":
            return { ...state, loginProcessing: true };
        case "LOGIN":
            return { ...state, user: action.payload ,loggedIn: true, loginProcessing: false  };
        default:
            return state;
    }
};

