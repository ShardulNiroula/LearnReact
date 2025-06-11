import { useState } from 'react';
import './auth.css';



function SignUp({setUser}) {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [submittedEmail, setSubmittedEmail] = useState("");
    const [submittedPassord, setSubmittedPassord] = useState("");

    function nameFunction(event){
        setName(event.target.value)
    }

    function emailFunction(event){
        setEmail(event.target.value)
    }
    function passwordFunction(event){
        setPassword(event.target.value)
    }

    function submit(event) {
        event.preventDefault()
        let valid = true

        if(name.length < 3){
            setNameError("Name must be atleast 3 characters long.")
            valid = false
        } else {
            setNameError("")
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        } else {
            setEmailError("");
        }

        if(password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            valid = false;
        } else {
            setPasswordError("");
        }

        if(valid) {
            setSubmittedName(name)
            setSubmittedEmail(email);
            setSubmittedPassord(password);

            setUser({name, email, password})

            setName("");
            setEmail("");
            setPassword("");
        }
       


    }


    return (
        <div className='Signup'>
            <h1 className='SignupHeader'>Signup</h1>
            <form onSubmit={submit}>
            <input
                type="text"
                placeholder='Write Your Full Name'
                value={name}
                onChange={nameFunction}
            />
            <span className='NameError'>{nameError}</span>

            <input
                type="email"
                placeholder='Write Your Email'
                value={email}
                 onChange={emailFunction}
            />
            <span className='EmailError'>{emailError}</span>

            <input
                type="password"
                placeholder='Write Your Password'
                value={password}
                 onChange={passwordFunction}
            />
            <span className='PasswordError'>{passwordError}</span>

            <button type='submit' className='Submit'>Submit</button>
            </form>

            <div className='SignupDetails'>
            <h1>Signed Up User Details</h1>
            <div>
                <p>Name: {submittedName}</p>
                <p>Email: {submittedEmail}</p>
                <p>Password: {submittedPassord ? '*'.repeat(submittedPassord.length) : ''}</p>
            </div>
            </div>
        </div>
    )
}

export default SignUp