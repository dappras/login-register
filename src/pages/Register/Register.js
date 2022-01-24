import React, {useState} from 'react';
import './Register.css'
import Image from './../../Asset/Image/login-register-image.png'
import Logo from './../../Asset/Image/logo.png'
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Cookies from 'universal-cookie';

const Register = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const cookies = new Cookies()
    const history = useHistory()

    const handleClick = () => {
        if(firstName==="") {
            alert("Please fill the form!!!")
        } else if(lastName==="") {
            alert("Please fill the form!!!")
        } else if(gender==="") {
            alert("Please fill the form!!!")
        } else if(province==="") {
            alert("Please fill the form!!!")
        } else if(city==="") {
            alert("Please fill the form!!!")
        } else if(email==="") {
            alert("Please fill the form!!!")
        } else if(password==="") {
            alert("Please fill the form!!!")
        }else {
            cookies.set("email", email, {expires: new Date(Date.now + 1)})
            cookies.set("password", password, {expires: new Date(Date.now + 1)})
            history.push('/')
        }
    }

    return (
        <div className='register'>
            <div className="left-side">
                <div className="nav">
                    <img src={Logo} alt="logo" />
                    <Link to="/">
                        <div className="btn-signin">
                            <p>Sign In</p>
                        </div>
                    </Link>
                </div>
                <div className="main">
                    <div className="title">
                        <p><span>Start for free</span> <br />Create An Account</p>
                    </div>
                    <div className="form">
                        <div className="row1">
                            <div className="first-name">
                                <input 
                                    type="text" 
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder='First Name...'
                                />
                            </div>
                            <div className="lastName">
                                <input 
                                    type="text" 
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder='Last Name...'
                                />
                            </div>
                            <div className="gender">
                                <select
                                    onChange={(e) => setGender(e.target.value)}
                                    placeholder='Gender'
                                >
                                    <option value="" disabled selected>Gender...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="Province">
                                <select
                                    onChange={(e) => setProvince(e.target.value)}
                                    placeholder='Province'
                                >
                                    <option value="" disabled selected>Province...</option>
                                    <option value="jakarta">Jakarta</option>
                                    <option value="jawa-barat">Jawa Barat</option>
                                </select>
                            </div>
                            {province=="" && (
                                <div className="City">
                                    <select
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='City'
                                    >
                                        <option value="" disabled selected>City...</option>
                                    </select>
                                </div>
                            )
                            || province=="jakarta" && (
                                <div className="City">
                                    <select
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='City'
                                    >
                                        <option value="" disabled selected>City...</option>
                                        <option value="jakarta-pusat">Jakarta Pusat</option>
                                        <option value="jakarta-utara">Jakarta Utara</option>
                                        <option value="jakarta-timur">Jakarta Timur</option>
                                        <option value="jakarta-barat">Jakarta Barat</option>
                                        <option value="jakarta-selatan">Jakarta Selatan</option>
                                    </select>
                                </div>
                            )
                            || province=="jawa-barat" && (
                                <div className="City">
                                    <select
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='City'
                                    >
                                        <option value="" disabled selected>City...</option>
                                        <option value="bandung">Bandung</option>
                                        <option value="bogor">Bogor</option>
                                        <option value="bekasi">Bekasi</option>
                                        <option value="cimahi">Cimahi</option>
                                        <option value="depok">Depok</option>
                                    </select>
                                </div>
                            )
                            }
                        </div>
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
                            <p>Sign Up</p>
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

export default Register;
