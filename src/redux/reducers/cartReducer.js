import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState';

export default function cartReducer(state = initialState.cartList, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const addedItem = state.find(c => c.packages.id === action.payload.packages.id);
            if (addedItem) {
                return state;
            }
            return [...state, { ...action.payload }]
        case actionTypes.REMOVE_FROM_CART:
            const packagesAfterRemoval = state.filter(c => c.packages.id !== action.payload.id)
            return packagesAfterRemoval;
        default:
            return state
    }
}