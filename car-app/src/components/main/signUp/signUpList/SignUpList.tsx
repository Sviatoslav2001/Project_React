import React, { useState } from 'react';
import signUpUser from '../../../interfaces/signUp.dao';
import SignUpListItem from './signUpListItem/SignUpListItem';
import '../../../../styles/signUp.scss'


interface IProps {
    users: signUpUser[],
}

const SignUpUserList = (props: IProps) => {
    const users = props.users;

    if(users.length) {
        return (
            <div className='containerSignUpList'>
            <th>
                {/* <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>E-Mail</td>
                <td>ID</td> */}
                {users.map(user => {
                return <SignUpListItem user={user} key={user.id} />
            })}
            </th>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default SignUpUserList;


