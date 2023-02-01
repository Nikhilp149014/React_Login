import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import FacebookLogin from "react-facebook-login";
import { Card, Image } from 'react-bootstrap';


function LoginForm() {
    debugger;
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const routeChange = () => {
        console.log("onclick triggered!!!");
        navigate('/Home');
    }
    // State for the error message
    //const [error, setError] = useState('');

    // Function to handle the login form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        debugger
        axios.post("http://127.0.0.1:5000/login", {
            email: email,
            Password: password
        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            Swal.fire(
                'Good job!',
                'Login Successfully',
                'success'
            )
            localStorage.setItem('access_token', response.data.access_token);
            sessionStorage.setItem('email', email);
            window.location.replace("/Home");

            // history.push("/dashboard");

        }).catch(error => {
            Swal.fire({
                type: 'fail',
                title: error.response.data.msg,
                timer: 5000,

            })
        });
    }
    //#region google login
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
        Swal.fire({
                    type: 'success',
                 title: 'Good job !Login Successfully',    
                 })
        setTimeout(function(){
             window.location.replace("/Home");
         }, 2000);
        };

        // Function to handle the login form submission

        // axios.post("http://127.0.0.1:5000/Google_Register", {
        //     Name: res.profileObj.name,
        //     email: res.profileObj.email,
        //     Contact: '',
        //     Username: '',
        //     Password: '',
        //     C_Password: '',

        // }, {
        //     headers: { 'Content-Type': 'application/json' }
        // }).then(response => {
        //     Swal.fire({
        //         type: 'success',
        //         title: 'Good job !Login Successfully',
        //         timer: 2000,

        //     })
        //     sessionStorage.setItem('email', email);
        //     window.location.replace("/Home");
        //     //history.push("/Home");

        // }).catch(error => {


        //     Swal.fire({
        //         type: 'fail',
        //         title: error.response.data.message,
        //         timer: 5000,

        //     })


            // Swal.fire({
            //     title: "Are you sure?",
            //     text: "You will not be able to recover this imaginary file!",
            //     type: "warning",
            //     showCancelButton: true,
            //     confirmButtonColor: '#DD6B55',
            //     confirmButtonText: 'Yes, I am sure!',
            //     cancelButtonText: "No, cancel it!"
            //  }).then(
            //        function () {  },
            //        function () { return false; });
            
            //window.location.replace("/learningLogin");
        //});

    

    const onFailure = (err) => {
        console.log('failed', err);
        window.location.replace("/learningLogin");
    };

    const logOut = () => {
        setProfile(null);
    };
    //#google login end region

    //#facebook login start region
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');
    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
            window.location.replace("/Home");
        } else {
            setLogin(false);
            window.location.replace("/learningLogin");
        }
    }

    //#facebook login end region 

    return (

        <div className="container-fluid">
            <div className="row header">
                <div className="col-md-1">

                </div>
                <div className="col-md-11">
                    {< img alt="" className="rounded float-start" src={require('../src/images/kaas_logo.png')} />}

                    {< img alt="" className="rounded float-end" src={require('../src/images/upper graphic log in.png')} />}
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-11">
                    <h4 className="text-left fs-6">Welcome back</h4>
                    <h2 className="card-title text-left fs-3">Login to your Account</h2><br />
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div className="mb-0">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-0">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="**********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <br />
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className="form-check-label ms-2" htmlFor="flexRadioDefault1">Remember me</label>

                        <a className="form-check-label text-end ms-left" onClick={routeChange}>Forget Password?</a>
                        <br />
                        <br />
                        <button type="submit" className="btn btn-danger form-control mb-2" width="100%" name="submit" id="submit">
                            Sign In
                        </button>
                        <br />

                        <GoogleLogin type="submit" clientId={clientId} buttonText="Sign in with Google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} className="btn btn-outline border form-control mb-3" width="100%" />

                        <br /> <br />
                      
                            <FacebookLogin type="submit" className="btn btn-outline border form-control mb-3" appId="3593885710891693" autoLoad={false} fields="name,email,picture" scope="public_profile,user_friends" callback={responseFacebook} icon="fa-facebook" />

                       
                        <br /> <br />
                        <h6 className="card-title text-center">New to Kaas? <a href="#">Create Account</a></h6>

                        <h6 className="form-control-sm text-center">By creating an account. You Accept Kaas Terms of Services and Privacy Policy</h6>
                        <label></label>
                    </div>

                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">

                                {/* <div>
                                    <img src={profile.imageUrl} alt="user image" />
                                    <h3>User Logged in</h3>
                                    <p>Name: {profile.name}</p>
                                    <p>Email Address: {profile.email}</p>
                                    <br />
                                    <br />
                                </div>
                                <div className="card">
                                    {login &&
                                        <Card.Body>
                                            <Card.Title>{data.name}</Card.Title>
                                            <Card.Text>
                                                {data.email}
                                            </Card.Text>
                                        </Card.Body>
                                    }
                                </div> */}


                                <h1 className="card-title text-left fw-bolder ft-fm">Log in to</h1>
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

            {/* <Alert variant="success">Logged In Sucessfully</Alert> */}



        </div>

        //container-fluid
    )
}
export default LoginForm;
