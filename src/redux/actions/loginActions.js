import axios from 'axios';

export const startLogin = content => {
  return dispatch => {
    dispatch(loginProcessing());
    axios
      .post("https://62f9ee323c4f110faa8ed350.mockapi.io/api/signup", content)
      .then(res => {
        dispatch(login(content));
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const loginProcessing = () => {
  return {
    type: "LOGINPROCESSING",
    payload: ""
  };
};

const login = content => {
  return {
    type: "LOGIN",
    payload: content
  };
};

// export const startLogin = content => {
//   return dispatch => {
//     dispatch(loginProcessing());
//     axios
//       .post("https://62f9ee323c4f110faa8ed350.mockapi.io/api/signup", content)
//       .then(res => {
//         debugger;
//         dispatch(login(content));
//       })
//       .catch(error => {
//         debugger;
//         console.log(error);
//       });
//   };
// };

// try {
//   await axios.get('https://62f9ee323c4f110faa8ed350.mockapi.io/api/signup')
// }
// catch (error) {
//   const err = error;
//   if (err.response) {
//     console.log(err.response.status)
//     console.log(err.response.data)
//   }
//   this.handleAxiosError(error)
// }

// async (content, { rejectV }) => {
//   try {
//     const response = await axios.post("https://62f9ee323c4f110faa8ed350.mockapi.io/api/signup", content);
//     if (response.status === 200) {
//       return response.data;
//     }
//     else {
//       return rejectV(response);
//     }
//   } catch (err) {
//     return rejectV(err);
//   }
// }

// async (content, { }) => {

//     try {
//       const response = await axios.get('https://62f9ee323c4f110faa8ed350.mockapi.io/api/signup');
//       console.log(response);
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response);
//       }
//       else {
//         console.log('Error', error.message);
//       }
//     }
//   }

