// import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState';

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGINPROCESSING":
            return { ...state, loginProcessing: true };
        case "LOGIN":
            return { ...state, fullName: action.payload, loggedIn: true, loginProcessing: false };
        default:
            return state;
    }
};


