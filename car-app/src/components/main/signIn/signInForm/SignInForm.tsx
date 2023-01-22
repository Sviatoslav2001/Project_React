import { useState } from "react";
import signInUser from "../../../interfaces/signIn.dao";
import '../../../../styles/signIn.scss'


interface IProps {
    signInUserForm: (user: signInUser) => void;
}


const SignInUserForm = (props: IProps) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>} }): void => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>} }): void => {
        event.preventDefault();
        setPassword(event.target.value)
    }

    const enterUser = (event: { preventDefault: () => void; }): void => {
        event.preventDefault();


        props.signInUserForm({
            email: email,
            password: password
        })
    }

    return (
        <form className="signInForm" onSubmit={enterUser}>
            <input onChange={handleEmailChange} type="text" placeholder="Електронна пошта"/>
            <input onChange={handlePasswordChange} type="password" placeholder="Пароль"/>
            <button>Увійти</button>
        </form>
    )
}

export default SignInUserForm;