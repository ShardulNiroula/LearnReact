import { useState } from 'react';
import './form.css';



function Form() {
    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [addressValue, setAddressValue] = useState("")
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [submitName, setSubmitName] = useState("");
    const [submitemail, setSubmitemail] = useState("");
    const [submitphone, setSubmitphone] = useState("");
    const [submitaddress, setSubmitaddress] = useState("");

    function nameFunction(event) {
        setNameValue(event.target.value)
    }
    function emailFunction(event) {
        setEmailValue(event.target.value)
    }
    function phoneFunction(event) {
        setPhoneValue(event.target.value)
    }
    function addressFunction(event) {
        setAddressValue(event.target.value)
    }

    function submit(event) {
        event.preventDefault();
        let valid = true;

        // Name validation (existing)
        if (nameValue.length < 3) {
            setNameError("Name must be at least 3 characters long.");
            valid = false;
        } else {
            setNameError("");
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValue) {
            setEmailError("Email is required.");
            valid = false;
        } else if (!emailRegex.test(emailValue)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        } else {
            setEmailError("");
        }

        //Phone Number Validation
        if (isNaN(phoneValue)) {
            setPhoneError("Phone Number Must be Number")
            valid = false;
        } else if (phoneValue.length !== 10) {
            setPhoneError("Phone number must be 10 digits long.")
            valid = false;
        } else {
            setPhoneError("")
        }

        if (addressValue.length < 3) {
            setAddressError("Address should be atleast 3 characters long.")
            valid = false
        } else {
            setAddressError("")
        }

        // You can add further validation for phone and address if needed

        if (valid) {
            setSubmitError(<span style={{ color: "green" }}>Form submitted successfully!</span>);
            setSubmitName(nameValue);
            setSubmitemail(emailValue);
            setSubmitphone(phoneValue);
            setSubmitaddress(addressValue);

            setNameValue("");
            setEmailValue("");
            setPhoneValue("");
            setAddressValue("");
        } else {
            event.preventDefault()
            setSubmitError("Please fix the errors above.");
            
        }
    }

    return (
        <div className='Form Container'>
            <h1 className='Title'>Form</h1>
            <form onSubmit={submit}>
                <h4 className='Name'>Name</h4>
                <input onChange={nameFunction} type="text" placeholder='Enter Your Name' value={nameValue} />
                <span className='NameError'>{nameError}</span>

                <h4 className='Email'>Email</h4>
                <input onChange={emailFunction} type="text" placeholder='Enter Your Email' value={emailValue}/>
                <span className='EmailError'>{emailError}</span>

                <h4 className='Phone-Number'>Phone Number</h4>
                <input onChange={phoneFunction} type="text" placeholder='Enter Your Phone Number' value={phoneValue}/>
                <span className='PhoneError'>{phoneError}</span>

                <h4 className='Address'>Address</h4>
                <input onChange={addressFunction} type="text" placeholder='Enter Your Address' value={addressValue}/>
                <span className='AddressError'>{addressError}</span>

                <button type="submit"  className='Submit'>Submit</button>
                <span className='SubmitError'>{submitError}</span>               
            </form>
            {submitError && typeof submitError !== "string" && (
                <div className='Submitted-value'>
                    <h1>Submitted Value</h1>
                    <p>Name: {submitName}</p>
                    <p>Email: {submitemail}</p>
                    <p>Phone Number: {submitphone}</p>
                    <p>Address: {submitaddress}</p>
                </div>
            )}
        </div>
    )

}

export default Form 