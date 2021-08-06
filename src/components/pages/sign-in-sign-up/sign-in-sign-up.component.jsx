import React from 'react';
import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

const SignInSignUpPage = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUpPage;