import initialState from './initialState';

export default function packagesReducer(state = initialState, action) {
    switch (action.type) {
        case "PAYMENT_PENDİNG":   
            return { ...state, pending: true};     
        case "PAYMENT_SUCCES":   
            return { ...state, cardNumber: action.payload, successpay: true, pending:false};           
        default:
            return state;
          
    }
};