// import * as actionCreators from "./actionCreators";
import axios from 'axios';

const packagesURL = "https://62f9ee323c4f110faa8ed350.mockapi.io/api/packages";

export const getPackagesApiRequest = () => {
    return async (dispatch)  => {
    dispatch({ type: "GET_PACKAGES_START" })
    await axios.get(packagesURL)
        .then(response => dispatch({ type: "GET_PACKAGES_SUCCES", payload: response.data }))
        // .then(response => console.log(response))
        .catch(error => dispatch({ type: "GET_PACKAGES_ERROR", payload: error }))
}
};

