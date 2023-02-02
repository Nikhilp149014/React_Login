import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import styled from "styled-components";


function LoginForm() {
    debugger;
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { linkedInLogin } = useState('');
    const navigate = useNavigate();
    const [code, setCode] = React.useState("");
    
  const [errorMessage, setErrorMessage] = React.useState("");
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
            setTimeout(function () {
                window.location.replace("/Home");
            }, 2000);

            // history.push("/dashboard");

        }).catch(error => {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: error.response.data.message,
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
        setTimeout(function () {
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

    //});



    const onFailure = (err) => {
        console.log('failed', err);
        window.location.replace("/learningLogin");
    };

    const logOut = () => {
        setProfile(null);
    };
    //#google login end region

    //#region linkdin login start here

    // const LinkedInPage=()=> {
    //     debugger;
        const { linkedInLogin } = useLinkedIn({
            clientId: '77xa3oqothce7p',
            redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
            onSuccess: (code) => {
                console.log(code);
            },
            scope: "r_emailaddress r_liteprofile",
            onError: (error) => {
                console.log(error);
            },
        });

    // }

    //#endregion linkdin login end here

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

                        
                        <br /><br />
                         <img onClick={linkedInLogin} src={linkedin} alt="Sign in with Linked In" style={{ maxWidth: '180px', cursor: 'pointer' }}/>
                        <br /> <br />
                        {code && (
        <div>
          <div>Authorization Code: {code}</div>
          <div>
            Follow{" "}
            <Link
              target="_blank"
              href="https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fconsumer%2Fcontext&tabs=HTTPS#step-3-exchange-authorization-code-for-an-access-token"
              rel="noreferrer"
            >
              this
            </Link>{" "}
            to continue
          </div>
        </div>
      )}
      {errorMessage && <div>{errorMessage}</div>}
                        <h6 className="card-title text-center">New to Kaas? <a href="#">Create Account</a></h6>

                        <h6 className="form-control-sm text-center">By creating an account. You Accept Kaas Terms of Services and Privacy Policy</h6>
                        <label></label>
                    </div>

                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
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
        </div>

        //container-fluid
    )
}

const Link = styled.a`
  font-size: 20px;
  font-weight: bold;
`;

export default LoginForm;
