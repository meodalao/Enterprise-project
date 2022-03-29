// import API_ROUTE from "../../../../apiRoute";
// import axios from "axios";
// import setAuthorizationToken from "../../../../authorization/authorization";
// import { BEFORE_STATE, LOGIN_SUCCESS, LOGIN_ERROR } from "../authTypes";
// // import { history } from "../../../../history";

// export const SignIn = (credentials) => {
//   return async (dispatch) => {
//     dispatch({ type: BEFORE_STATE });
//     try {
//       const res = await axios.post(`${API_ROUTE}/login`, credentials);
//       let userData = res.data.response;
//       localStorage.setItem("token", userData.token);
//       localStorage.setItem("user_data", JSON.stringify(userData));
//       setAuthorizationToken(userData.token);
//       dispatch({ type: LOGIN_SUCCESS, payload: userData });
//     } catch (err) {
//       dispatch({ type: LOGIN_ERROR, payload: err.response.data.error });
//     }
//   };
// };

import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    // clientId: process.env.GOOGLE_CLIENT_ID, // Your clientID from Google.
    clientId:
      "858424319768-k986v7n4qmt76ujf0dp00s7cbcdd1t27.apps.googleusercontent.com",
  });

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
