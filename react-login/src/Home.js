import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const Logout = () => {
        console.log("onclick triggered!!!");
        localStorage.clear();
        navigate('/Login');
    }
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><h2><span className="badge bg-secondary">{localStorage.UserName}</span></h2></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>

                    <button className="btn btn-danger btn-lg" onClick={Logout}>
                    Log out                    </button>
                </div>
            </nav>
            <div className="row header">
                <div className="col-6">
                    {< img alt="" className="rounded float-start img-responsive" src={require('../src/images/kaas_logo.png')} />}

                </div>
                <div className="col-6">
                    {< img alt="" className="rounded float-end img-responsive" src={require('../src/images/upper graphic log in.png')} />}
                </div>
            </div>
            <form action="">

                <div className="row">
                    <div className='col text-center'>
                        <h1>Dashboard Hi</h1>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Home;