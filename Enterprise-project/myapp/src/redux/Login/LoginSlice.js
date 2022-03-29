import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
// or
// import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="858424319768-k986v7n4qmt76ujf0dp00s7cbcdd1t27.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    isSignedIn={true}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />,
  document.getElementById("googleButton")
);
