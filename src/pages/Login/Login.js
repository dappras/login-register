import React, {useState} from 'react';
import './Login.css';
import Image from './../../Asset/Image/login-register-image.png'
import Logo from './../../Asset/Image/logo.png'
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const cookies = new Cookies()

    const handleClick = () => {
        if(email==="") {
            alert("Please fill the form!!")
        } else if(password==="") {
            alert("Please fill the form!!")
        } else if(cookies.get("email")!==email) {
            alert("Wrong Email or Password!!")
        } else if(cookies.get("password")!==password){
            alert("Wrong Email or Password!!")
        }else {
            alert("Login Success")
        }
    }

    return (
        <div className='login'>
            <div className="left-side">
                <div className="nav">
                    <img src={Logo} alt="logo" />
                    <Link to="/register">
                        <div className="btn-signin">
                            <p>Sign Up</p>
                        </div>
                    </Link>
                </div>
                <div className="main">
                    <div className="title">
                        <p><span>Start for free</span> <br />Sign Into Your Account</p>
                    </div>
                    <div className="form">
                        <div className="row3">
                            <input 
                                type="email" 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email...'
                            />
                        </div>
                        <div className="row4">
                            <input 
                                type="password" 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password...'
                            />
                        </div>
                        <button className='row5' onClick={handleClick}>
                            <p>Sign In</p>
                        </button>
                    </div>
                </div>
                <div className="foot">
                    <div className="copyright">
                        <p>Copyright 2022</p>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="image">
                    <img src={Image} alt="image1" />
                </div>
                <div className="description">
                    <p>Start for free and improve your programming carrer just in one click.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;