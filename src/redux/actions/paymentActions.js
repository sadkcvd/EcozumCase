// import * as actionCreators from "./actionCreators";
import * as actionTypes from "./actionTypes";
import axios from 'axios';

const paymentURL = "https://62f9ee323c4f110faa8ed350.mockapi.io/api/payment";

export const startPayment = (pay) => {
    // console.log(pay)
    return async (dispatch)  => {
    dispatch({ type: actionTypes.PAYMENT_PENDING })
    await axios.post(paymentURL)
        .then(() => dispatch({ type: actionTypes.PAYMENT_SUCCESS, payload: pay.cardNumber }))
        // .then( response => console.log(response)) 
        .catch(error => dispatch(console.log(error)))
}
};
