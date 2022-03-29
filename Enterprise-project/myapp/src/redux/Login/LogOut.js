import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '858424319768-k986v7n4qmt76ujf0dp00s7cbcdd1t27.apps.googleusercontent.com'

function Logout(){
    const onSuccess = () => {
        alert ('Log out successfully  ');
    }

    return (
        <div>
            <GoogleLogout>
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            </GoogleLogout>
        </div>
    );
}
export default  Logout;

