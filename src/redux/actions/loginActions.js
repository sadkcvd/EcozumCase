// import * as actionCreators from "./actionCreators";
import axios from 'axios';

const loginURL = "https://62f9ee323c4f110faa8ed350.mockapi.io/api/signup";

export const startLogin = (user) => {
  console.log(user)
  return async (dispatch) => {
    dispatch({ type: "LOGINPROCESSING" });
    await axios.post(loginURL,user)
      .then(() => dispatch({ type: "LOGIN", payload: user.fullName }))
      .then( res => console.log(res)) 
      .catch(error => dispatch(console.log(error)))
  }
};


