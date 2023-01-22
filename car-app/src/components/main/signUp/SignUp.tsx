import React, { useState } from 'react';
import signUpUser from '../../interfaces/signUp.dao'
import SignUpUserForm from './signUpForm/SignUpForm';
import SignUpUserList from './signUpList/SignUpList';
import '../../../styles/signUp.scss'

const SignUp = () => {
    const signUpUsersFromStorage: signUpUser[] = JSON.parse(localStorage.getItem('users') as string) || [];
    const [users, setUsers] = useState(signUpUsersFromStorage);

    const updateSignUpList = (newUser: signUpUser) => {
        setUsers([...users, newUser]);
        localStorage.setItem('create users', JSON.stringify([...users, newUser]));
    }

    return(
        <div className='containerSignUpForm'>
            <SignUpUserForm signUpUserForm={updateSignUpList} />
            <SignUpUserList users={users} />
        </div>
    )
}


export default SignUp;