// import * as actionCreators from "./actionCreators";
import axios from 'axios';

const packagesURL = "https://62f9ee323c4f110faa8ed350.mockapi.io/api/packages";

export const getPackagesApiRequest = () => dispatch => {
    dispatch({ type: "GET_PACKAGES_START" })
    axios.get(packagesURL)
        .then(response => dispatch({ type: "GET_PACKAGES_SUCCES", payload: response.data }))
        .catch(error => dispatch({ type: "GET_PACKAGES_ERROR", payload: error }))
};


