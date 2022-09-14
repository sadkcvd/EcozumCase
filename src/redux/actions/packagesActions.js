// import * as actionCreators from "./actionCreators";
import * as actionTypes from "./actionTypes";
import axios from 'axios';

const packagesURL = "https://62f9ee323c4f110faa8ed350.mockapi.io/api/packages";

export const getPackagesApiRequest = () => {
    return async (dispatch)  => {
    dispatch({ type: actionTypes.GET_PACKAGES_START})
    await axios.get(packagesURL)
        .then(response => dispatch({ type: actionTypes.GET_PACKAGES_SUCCESS, payload: response.data }))
        // .then(response => console.log(response))
        .catch(error => dispatch({ type: actionTypes.GET_PACKAGES_ERROR, payload: error }))
}
};

