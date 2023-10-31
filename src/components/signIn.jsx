import React from 'react';
import InfoAbtFb from './FbInfo';
import SignInModal from './SignInModal';

function SignupPage() {
    const backgroundDiv = {
        backgroundColor: 'rgb(232, 228, 228)',
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0
    };

    const signUpMainDiv = {
        width: '1260px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    };

    return (
        <div style={backgroundDiv}>
            <div style={signUpMainDiv}>
                <InfoAbtFb />
                <SignInModal />
            </div>
        </div>
    );
}

export default SignupPage;