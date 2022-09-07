
import initialState from './initialState';

export default function packagesReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PACKAGES_START":   
            return { ...state, isLoading: true, message: ''};     
        case "GET_PACKAGES_SUCCES":   
            return { ...state, packages: action.payload, isLoading: false };             //action'dan gelen packages'leri (yani api'den gelen) packages state'ine set edip dönderiyoruz.
        case "GET_PACKAGES_ERROR":
            return { ...state, message: action.payload, isLoading: false };
        default:
            return state;
          
    }
};



