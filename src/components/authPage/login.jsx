
import { useState } from 'react';
import './auth.css';

function Login({user}) {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [submittedName, setsubmittedName] = useState("User")

    
    function emailFunction(event){
        setEmail(event.target.value)
    }
    function passwordFunction(event){
        setPassword(event.target.value)
    }

    function submit(event) {
        event.preventDefault()
        let valid = true

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
            if(user && user.email === email && user.password === password) {
                setsubmittedName(user.name)
                setSubmitError("")
            } else {
                setsubmittedName("")
                setSubmitError("User does not exist or credentials are incorrect.")
            }

            

    }
}


    return (
        <div className='Login'>
            <h1 className='LoginHeader'>LogIn</h1>
            <p className='detail'>You have to fill above signup page to login.</p>
            <form onSubmit={submit}>
            
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
            <span className='SubmitError'>{submitError}</span>
            </form>

            <div className='result'>
            <h3 className='resultMessage'> {`Welcome ${submittedName}`}</h3>
            </div>
        </div>
        )
}

export default Login