// import * as actionCreators from "./actionCreators";
import * as actionTypes from "./actionTypes";

export function addToCart(cartItem){
    return { type: actionTypes.ADD_TO_CART, payload: cartItem }
}

export function removeFromCart(payloadObj){
    return { type: actionTypes.REMOVE_FROM_CART, payload: {id: payloadObj.id}}
}










