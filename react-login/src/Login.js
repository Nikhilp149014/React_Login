import React, { useState } from "react"
import { Routes, Route, useNavigate, useHistory } from "react-router-dom";

function LoginLayout() {
    const navigate = useNavigate();
    const routeChange = () => {
        console.log("onclick triggered!!!");
        navigate('/LearningLogin');
    }

    return (

        <div className="Container justify-content center me-0">
             <div className="col mt-2"></div>
            <div className="row header">
            <div className="col-md-1">

            </div>
             
                <div className="col-md-2">
                    < img className="rounded float-start" src={require('../src/images/kaas_logo.png')} />
                </div>
                <div className="col-md-7">
                </div>
                <div className="col-md-2 rounded float-start mt-3">
                    <button className="btn btn-danger btn-lg" onClick={routeChange}>
                        Sign In
                    </button>
                </div>
                
            </div>          

            <div className="container text-center">

            </div>
            <div className="row me-0">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <div className="col">
                        < img className="rounded float-center img-wd" src={require('../src/images/gif-for-kaas.gif')} width="100%" />
                    </div>
                    <h1 className="card-title text-center">Up-Skill As You Work</h1>
                    <h4 className="card-title text-center">Learning Anywhere, Anytime</h4>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-danger get-started-btn" type="button" id="button-addon2">Get Started</button>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>

            <div className="col">
                <img className="rounded" id="Landingpage_01" src={require('../src/images/graphic landing page.png')} width="100%" height="20%" />
            </div>
        </div> //Container justify-content center



    );
}

export default LoginLayout