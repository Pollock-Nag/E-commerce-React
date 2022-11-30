import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { user_info } from '../Data/UserInfo';

const Login = () => {

    const [PhoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    function fetchUser() {
        //console.log('Working')
        let isValidUser = 0;
        user_info.map(function (elem) {
            console.log(elem)
            if (elem.phoneNumber == PhoneNumber && elem.password == password) {
                isValidUser += 1

            } else {
                isValidUser += 0
            }
        })

        if (isValidUser !== 0) {
            alert("Successful")
            navigate('/CustomerLists/' + String(PhoneNumber))
            localStorage.setItem("user", String(PhoneNumber))
        } else {
            alert("Invalid Information")
        }
    }



    return (
        <div className='Loginbody'>

            <div className='LoginTitleContainer'>
                Login
            </div>



            <div className='LoginForm'>


                <div className='PhoneNumberContainer' > <input class="form-control" type="number" name='PhoneNumber' placeholder='PhoneNumber' onChange={(e) => { setPhoneNumber(e.target.value) }}></input></div>

                <div className='passwordContainer'><input class="form-control" type="password" name='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}></input></div>



                <div className="buttonContainer" ><Button variant="outline-primary" size="sm" onClick={fetchUser}>Login</Button></div>


            </div>

        </div>
    )
}

export default Login
