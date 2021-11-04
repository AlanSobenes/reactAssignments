import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("")
    const [firstNameErr, setfirstNameErr] = useState({})
    const [lastNameErr, setlastNameErr] = useState({})
    const [emailErr,setemailErr] = useState({})
    const [passwordErr, setpasswordErr] = useState({})
    const [confirmPasswordErr, setconfirmPasswordErr] = useState({})

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        const isValid = formValidation();
    };

    const formValidation = () =>{
        const firstNameErr = {};
        const lastNameErr = {};
        const emailErr = {};
        const passwordErr= {};
        const confirmPasswordErr = {};
        let isValid = true;

        if(firstName.length < 2 && firstName.length > 0){
            firstNameErr.fNameShort = "First Name must be more than 2 characters long";
            isValid = false;
        }
        if(lastName.length < 2 && lastName.length > 0){
            lastNameErr.lNameShort = "Last Name must be more than 2 characters long";
            isValid = false;
        }
        if(email.length < 5 && email.length > 0){
            emailErr.emailShort = "Email must be more than 5 characters long";
            isValid = false;
        }
        if(password.length < 8 && password.length > 0){
            passwordErr.passwordShort = "Password must be more than 8 characters long";
            isValid = false;
        }
        if(confirmPassword !== password){
            confirmPasswordErr.passSame = "Passwords do not match!";
            isValid = false;
        }
        setfirstNameErr(firstNameErr);
        setlastNameErr(lastNameErr);
        setemailErr(emailErr);
        setpasswordErr(passwordErr)
        setconfirmPasswordErr(confirmPasswordErr)
        return isValid;


        

    }


    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <br />
                {Object.keys(firstNameErr).map((key)=> {
                    return <div>{firstNameErr[key]}</div>
                })}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <br />
                {Object.keys(lastNameErr).map((key)=> {
                    return <div>{lastNameErr[key]}</div>
                })}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <br />
                {Object.keys(emailErr).map((key)=> {
                    return <div>{emailErr[key]}</div>
                })}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                {Object.keys(passwordErr).map((key)=> {
                    return <div>{passwordErr[key]}</div>
                })}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} />
                <br />
                {Object.keys(confirmPasswordErr).map((key)=> {
                    return <div>{confirmPasswordErr[key]}</div>
                })}
            </div>
            {/* <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => confirmPassword(e.target.value) } />
            </div> */}
            <input type="submit" value="Create User" />
            <div>
                <h2> First Name: {firstName}</h2>
                <h2> Last Name: {lastName}</h2>
                <h2>Email: {email}</h2>
                <h2>Password: {password}</h2>
                <h2>Confirm Password: {confirmPassword}</h2>
            </div>
        </form>
    );
};

export default UserForm;