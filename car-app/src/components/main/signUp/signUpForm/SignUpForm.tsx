import React, { useState } from "react";
import signUpUser from "../../../interfaces/signUp.dao";
import '../../../../styles/signUp.scss'

interface IProps {
    signUpUserForm: (user: signUpUser) => void;
}


const SignUpUserForm = (props: IProps) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>} }): void => {
        event.preventDefault();
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>} }): void => {
        event.preventDefault();
        setLastName(event.target.value)
    }

    const handleAgeChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>} }): void => {
        event.preventDefault();
        const value = event.target.value;
        setAge(value as unknown as number)
    }

    const handleEmailChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>} }): void => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>} }): void => {
        event.preventDefault();
        setPassword(event.target.value)

    }

    const alerts = () => {
        if(password.length < 5) {
            return (alert('Пароль мінімум 5 символів'));
        }

        if(age >= 18) {
            return (alert('Чудовий вік для покупки авто!'))
        }
    }


    const idGeneration = (): number => {
        return (Math.round(Math.random() * 10e3));
    }
    


 

    const createUser = (event: { preventDefault: () => void; }): void => {
        event.preventDefault();

        props.signUpUserForm({
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            password: password,
            id: idGeneration(),
        })
    }

    return (
        <form className="signUpForm" onSubmit={createUser}>
            <input onChange={handleFirstNameChange} type="text" placeholder="Ім'я" />
            <input onChange={handleLastNameChange} type="text" placeholder="Прізвище" />
            <input onChange={handleAgeChange} type="number" placeholder="Вік" />
            <input onChange={handleEmailChange} type="email" placeholder="Електронна пошта" />
            <input onChange={handlePasswordChange} type="password" placeholder="Пароль"/>
            <button onClick={alerts}>Створити</button>
        </form>
    )
}

export default SignUpUserForm;