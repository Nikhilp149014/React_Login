import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { gapi } from 'gapi-script';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function RegisterForm() {
    
    // const navigate = useNavigate();
    const [user_pass, setuser_pass] = useState('');

    const [user_nicename, setuser_nicename] = useState('');
    const display_name = user_nicename;
    const [user_login, setuser_login] = useState('');
    const [Contact, setContact] = useState('');
    const [C_Password, setC_Password] = useState('');
    const user_email = user_login;
    const [show, setShow] = useState(false);
    const handleCloseFP = () => setShow(false);
    const handleShowFP = () => setShow(true);

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const OTPL = localStorage.OTP;
    const LoginFormSubmit = () => {
        console.log("onclick triggered!!!");
        navigate('/Login');
    }

    function OTPInput() {
        const inputs = document.querySelectorAll('#otp2 > *[id]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function (event) {
                if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); }
                else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus();
                        event.preventDefault();
                    } else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode);
                        if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                    }
                }
            });
        }

    }


    const ActivateUser = async (e) => {
        e.preventDefault();
        var inputs = document.getElementsByClassName('m-2 text-center form-control rounded'),
            OTP = [].map.call(inputs, function (input) {
                return input.value;
            }).join('');
       if(OTP==OTPL)
       {
        Swal.fire({
            type: 'success',
            title: 'Good job !Authontication Successfully',
            timer: 2000,

        })
        window.location.replace("/Login");
        localStorage.clear();
        sessionStorage.clear();
        

       }
       else{
        Swal.fire({
            type: 'warning',
            title: 'OTP not match Please put correct OTP',
            timer: 2000,
        })
       }

            // setTimeout(function () {
            //     window.location.replace("/Login");
            // }, 2000);

            // history.push("/dashboard");

        
    }

    const GenerateOTP = async () => {
        debugger;
        axios.get("http://127.0.0.1:5000/OTP", {

        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            // Swal.fire(
            //     'Good job!',
            //     'Login Successfully',
            //     'success'
            // )
            localStorage.setItem('OTP', response.data.OTP);
            OTPL = localStorage.OTP;

            setTimeout(function () {
                // window.location.replace("/Home");
            }, 2000);

        }).catch(error => {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: error.response.data.message,
                timer: 5000,

            })
        });
    }

    const RegisterFormSubmit = async () => {
        //event.preventDefault();
        //const OTP=response.data.OTP;
        setError(null);
        if (user_pass !== C_Password) {
            setError('Passwords do not match');
            return;
        }
        try {
            debugger;
            const OTP = localStorage.OTP;
            axios.post('http://127.0.0.1:5000/register', { user_nicename, user_login, display_name, user_email, user_pass, C_Password, OTP })
                .then(response => {
                    debugger;
                    sessionStorage.setItem("user_nicename", response.data.user_nicename);
                    localStorage.setItem("user_login", response.data.user_login);
                    sessionStorage.setItem("display_name", response.data.display_name);
                    sessionStorage.setItem("user_pass", response.data.user_pass);
                    sessionStorage.setItem("user_login", response.data.user_login);
                    sessionStorage.setItem("user_email", response.data.user_email);
                    sessionStorage.setItem('access_token', response.data.access_token);

                    
                  
                    
                    Swal.fire({
                        type: 'success',
                        title: 'Good job !Login Successfully',
                        timer: 2000,

                    })
                    
                    this.handleShowFP();
                    this.OTPInput();
                    
                })
                .catch(error => {

                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: error.response.data.message,
                        timer: 50000,

                    })
                   
                   

                }).finally(error => {
                    alert(error.response)
                });
        }
        catch (err) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: error.response.data.message,
                timer: 5000,

            })
        }


    }


    //#region google login register
    const [profile, setProfile] = useState([]);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
        console.log(res.name)
        localStorage.setItem('UserName', res.profileObj.name);
        axios.post("http://127.0.0.1:5000/Google_Register", {
            Name: res.profileObj.name,
            user_login: res.profileObj.email,
            user_email: res.profileObj.email,
            user_nicename: res.profileObj.givenName,
            display_name: res.profileObj.givenName,
        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            Swal.fire({
                type: 'success',
                title: 'Good job !Login Successfully',
                timer: 2000,

            })
            sessionStorage.setItem('user_login', user_login);
            window.location.replace("/Home");
            //history.push("/Home");

        }).catch(error => {
            const msg = error.response.data.message;

            if (msg == 'User already exists') {
                Swal.fire({
                    type: 'success',
                    title: 'Good job !Login Successfully',
                    timer: 2000,

                })
                window.location.replace("/Home");
            }
            else {


                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: error.response.data.message,
                    timer: 5000,

                })
            }
        });
    };

    //Function to handle the login form submission


    const onFailure = (err) => {
        console.log('failed', err);
        window.location.replace("/Login");
    };


    //#google login end region

    //#region linkdin login start here

    // const LinkedInPage=()=> {
    //     debugger;
    console.log(window.location.origin);
    const { linkedInLogin } = useLinkedIn({
        clientId: '86vhj2q7ukf83q',
        redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
        onSuccess: (code) => {
            console.log(code);
        },
        scope: "r_emailaddress r_liteprofile",
        onError: (error) => {
            console.log(error);
        },
    });



    //#endregion linkdin login end here



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
                    {/* <h4 className="text-left fs-6">Welcome back</h4> */}
                    <h2 className="card-title text-left fs-3">Sign Up</h2><br />
                </div>
            </div>
            <form onSubmit="">

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div className="mb-0">
                            {/* <label>Name</label> */}
                            <input
                                type="text"
                                placeholder="Type Your Name"
                                className="form-control mt-3"
                                name="Name"
                                value={user_nicename}
                                onChange={(e) => setuser_nicename(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            {/* <label>Email address</label> */}
                            <input
                                type="email"
                                placeholder="Type Your Email"
                                className="form-control mt-3"
                                name="user_login"
                                value={user_login}
                                onChange={(e) => setuser_login(e.target.value)}
                            />
                        </div>
                        {/* <div className="mb-0">
                         
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="form-control mt-3"
                                name="contact"
                                value={Contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div> */}
                        <div className="mb-0">
                            {/* <label>User Name</label> */}
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control mt-3"
                                name="user_pass"
                                value={user_pass}
                                onChange={(e) => setuser_pass(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            {/* <label>User Name</label> */}
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="form-control mt-3"
                                name="C_password"
                                value={C_Password}
                                onChange={(e) => setC_Password(e.target.value)}
                            />
                        </div>

                        <br />
                        {/* <button type="submit" className="btn btn-danger form-control mb-2" width="100%" name="Register" onClick={RegisterFormSubmit} id="btnRegister">
                            Sign Up
                        </button>
                        <br /> */}
                        {/* <button type="" className="btn btn-danger form-control mb-2" width="100%" name="RegisterTest" onClick={RegisterFormSubmit} id="btnRegistertest">
                            Register
                        </button> */}

                        {/* <button type="submit" className="btn btn-danger form-control mb-2" width="100%" name="Login" onClick={LoginFormSubmit} id="btnLogin">
                            Sign In
                        </button> */}
                        <br />


                        {/* <span><button className="btn btn-danger px-4 validate mb-2" onClick={handleShowFP}>Validate</button></span> */}
                        {/* <Link className="form-check-label text-end ms-left" onClick={handleShowFP}>Forget Password?</Link> */}

                        <span className="login100-form-btn register_btn" onClick={() => { GenerateOTP(); RegisterFormSubmit(); handleShowFP(); }}>
                            Sign Up
                        </span>
                        <br />

                        <GoogleLogin type="submit" clientId={clientId} buttonText="Sign in with Google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} className="btn btn-outline border form-control mb-3" width="100%" />


                        <button type="submit" className="form-control mb-2" width="100%" name="submit" id="submit" onClick={linkedInLogin} src={linkedin}>
                            <img src={require('../src/images/kaas-logo_linkdin_social.jpg')}></img> sign-in with Linkedin
                        </button>

                        {/* <img onClick={linkedInLogin} src={linkedin} alt="Sign in with Linked In" style={{ maxWidth: '180px', cursor: 'pointer' }} /> */}

                        <p className="text-center">Already Register? Sign In</p>
                        <p className="text-center">By Creating An Account, You Accept Kaas Terms Of Services & Privacy Policy</p>


                        {/* <button className="btn btn-danger form-control mb-2" width="100%" onClick={routeChange} id="submit">
                            Login
                        </button> */}
                        {/* </div> */}
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-2 col-sm-2"></div>
                            <div className="col-md-4 col-sm-2 pt-5 mt-5">
                                <h1 className="card-title text-left fw-bolder ft-fm">Sign Up Un-ending Learning!</h1>
                                {/* <h1 className="card-title text-left ft-fm">Your</h1>
                                <h1 className="card-title text-left ft-fm">Learning</h1>
                                <h1 className="card-title text-left ft-fm">World.</h1> */}
                            </div>
                            <div className="col-md-4 col-sm-2">
                                <img alt="" id="headerimg" className="rounded" src={require('../src/images/registermainimg.png')} width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {< img alt="" id="optionalstuff" className="rounded float-end" src={require('../src/images/lower log in page.png')} />}
                    </div>
                </div>
                <Modal id="myOTPmodel" show={show} onHide={handleCloseFP}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <div className="container height-100 d-flex justify-content-center align-items-center">
                            <div className="position-relative"> <div className="card p-2 text-center mt-4">
                                <h6 className="fs-4">Please enter the one time password <br /> to verify your account</h6>
                                <div> <span>An OTP has been sent to</span> <small>{localStorage.email}</small>
                                </div>
                                <div id="otp2" className="inputs d-flex flex-row justify-content-center mt-2">
                                    <input className="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                                    <input className="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                    <input className="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                                    <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                    <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                                    <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                                </div> <div className="mt-4">

                                    {/* <span className="btn btn-danger px-4 validate mb-2" onClick={ActivateUser}>
                                        Validate</span> */}
                                    <button className="btn btn-danger px-4 validate mb-2" onClick={ActivateUser}>Validate</button>
                                </div>
                            </div>
                                <div className="card-2"> <div className="content d-flex justify-content-center align-items-center">
                                    <span>Didn't get the code</span> <a href="#" className="text-decoration-none ms-3">Resend(1/3)</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                </Modal>
            </form>
        </div>//container-fluid
    )
}

export default RegisterForm;
