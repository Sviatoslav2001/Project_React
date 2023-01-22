import { useState } from 'react';
import '../../../styles/signIn.scss';
import signInUser from '../../interfaces/signIn.dao';
import SignInUserForm from './signInForm/SignInForm';

const SignIn = () => {
    const signInUsersFromStorage: signInUser[] = JSON.parse(localStorage.getItem('users') as string) || [];
    const [users, setUsers] = useState(signInUsersFromStorage);

    const updateSignInList = (currentUser: signInUser) => {
        setUsers([...users, currentUser]);
        localStorage.setItem('enter users', JSON.stringify([...users, currentUser]))
    }

    return (
        <div className="signIn-container">
            <SignInUserForm signInUserForm={updateSignInList} />

        </div>
    )
}


export default SignIn;