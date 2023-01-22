import signUpUser from "../../../../interfaces/signUp.dao";


interface IProps {
    user: signUpUser
}

const SignUpListItem = (props: IProps) => {
    const {
        firstName,
        lastName,
        age,
        email,
        password,
        id
    } = props.user;

    return(
        <div className="containerSignUpListItem">
        {/* <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{age}</li>
            <li>{email}</li>
            <li>{id}</li>
        </ul> */}
        </div>
    )
}






export default SignUpListItem;