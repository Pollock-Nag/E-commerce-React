import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Signup = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return (
        <div className='SignUpbody'>

            <div className='SignUpTitleContainer'>
                Signup
            </div>



            <div className='SignUpForm'>

                <div className='nameContainer'><input class="form-control" type="text" name='name' placeholder='Name' onChange={(e) => { setName(e.target.value) }}></input></div>



                <div className='phoneNumberContainer' > <input class="form-control" type="number" name='phoneNumber' placeholder='Phone Number(11 digit)' onChange={(e) => { setphoneNumber(e.target.value) }}></input></div>

                <div className='passwordContainer'><input class="form-control" type="password" name='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}></input></div>
                <div className='confirmPasswordContainer' ><input class="form-control" type="password" name='confirmPassword' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}></input></div>


                <div className="buttonContainer"><Button variant="outline-primary" size="sm" >Signup</Button ></div>


            </div>

        </div>
    )
}

export default Signup