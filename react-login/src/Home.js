import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function Login() {
    return (
        <div className='container-fluid'>     
       <div className="row header">
                <div className="col-6">
                    {< img alt="" className="rounded float-start img-responsive" src={require('../src/images/kaas_logo.png')} />}
                    
                </div>
                <div className="col-6">
                    {< img alt="" className="rounded float-end img-responsive" src={require('../src/images/upper graphic log in.png')} />}
                </div>
            </div>           
        </div>
    );
}

export default Login;