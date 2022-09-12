// import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState';

export default function cartReducer(state = initialState.cartList, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            var addedItem = state.find(c => c.packages.id === action.payload.packages.id);
            return [...state, { ...action.payload }]
        default:
            return state
    }
}