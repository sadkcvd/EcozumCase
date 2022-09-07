// import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState';

export default function cartReducer(state = initialState.cartList, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            var addedItem = state.find(c=>c.packages.id === action.payload.packages.id);
            return [...state,{...action.payload}]
        // case "REMOVE_FROM_CART":
        //     return []
            default:    
               return state
        }
    }


    // case "PACKAGE_TOTAL_PRİCE":
    //     var totalPrice = (addedItem.action.payload.amount + action.payload.packages.amount)
    //     return [...state,{...action.payload}]

    // const initialState = {
//     cartList : [],
//     totalPrice : 0,
//     payment : false,
//     errorMsg : "",
//     pending: false
// };

// export default function cartReducer(state=initialState, action){
// switch(action.type){
//     case 'PAYMENT_PENDİNG':
//         return { ...state, pending: true};
//     case 'PAYMENT_SUCCES':
//         return { ...state, cart: cartList, totalPrice: 0, payment: true, pending: false };
//     case 'PAYMENT_ERROR':
//         return { ...state, errorMsg: action.payload };
//     default:    
//          return state;
// }
// };