import React, { useState } from "react";
import { Routes, Route, useNavigate, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios';
import Swal from 'sweetalert2'


function RegisterForm() {
    debugger;
    const navigate = useNavigate();
    // const history = useHistory();
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setc_Password] = useState('');
    const routeChange = () => {
        console.log("onclick triggered!!!");
        navigate('/LearningLogin');
    }
    // State for the error message
    //const [error, setError] = useState('');

    // Function to handle the login form submission
    const handleSubmit = async (e) => {
        e.preventDefault();       
        axios.post("http://127.0.0.1:5000/Register", {
            Name: name,
            email: email,            
            Contact: contact,
            Username: username,
            Password: password,
            C_Password: c_password,

        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            Swal.fire(
                'Good job!',
                'Register Successfully',
                'success'
            )
            //localStorage.setItem('access_token', response.data.access_token);
            sessionStorage.setItem('email', email);
           // window.location.replace("/Register");

            // history.push("/dashboard");

        }).catch(error => {
            debugger
            alert(error);
            Swal.fire(
                error.response.data,
                'You clicked the button!',
               'error'
            )


        });
    }


    return (



        // # start
        <div className="container-fluid">
            <div className="row header">
                <div className="col-md-1">

                </div>
                <div className="col-md-11 me-0">
                    {< img alt="" className="rounded float-start" src={require('../src/images/kaas_logo.png')} />}
                    {< img alt="" className="rounded float-end" src={require('../src/images/upper graphic log in.png')} />}
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-11 me-0">
                    <h4 className="text-left fs-6">Welcome back</h4>
                    <h2 className="card-title text-left fs-3">Login to your Account</h2><br />
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control mt-3"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-3"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            <label>Contact</label>
                            <input
                                type="text"
                                className="form-control mt-3"
                                name="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            <label>User Name</label>
                            <input
                                type="text"
                                className="form-control mt-3"
                                name="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-3"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control mt-3"
                                name="c_password"
                                value={c_password}
                                onChange={(e) => setc_Password(e.target.value)}
                            />
                             <br/>
                        <button type="submit" className="btn btn-danger form-control mb-2" width="100%" name="submit" id="submit">
                            Sign In
                        </button>
                        <br/>
                        <button className="btn btn-danger form-control mb-2" width="100%" onClick={routeChange} id="submit">
                            Login
                        </button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <h1 className="card-title text-left fw-bolder ft-fm">Register in to</h1>
                                <h1 className="card-title text-left ft-fm">Your</h1>
                                <h1 className="card-title text-left ft-fm">Learning</h1>
                                <h1 className="card-title text-left ft-fm">World.</h1>
                            </div>
                            <div className="col-md-4">
                                <img alt="" id="headerimg" className="rounded" src={require('../src/images/log in-02.png')} width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {< img alt="" id="optionalstuff" className="rounded float-end" src={require('../src/images/lower log in page.png')} />}
                    </div>
                </div>
            </form>
        </div>//container-fluid
    )
}

export default RegisterForm;
