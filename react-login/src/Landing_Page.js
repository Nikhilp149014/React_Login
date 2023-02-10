import React, { useState } from "react"
import {useNavigate} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitterSquare, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import "./App.css"
function LoginLayout() {
    const navigate = useNavigate();
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin);
    const routeChange = () => {
        console.log("onclick triggered!!!");
        navigate('/Login');
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
                        < img className="rounded float-center img-wd" src={require('../src/images/globe tech pen-01.png')} width="100%" />
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
            <div class="container-fluid mt-1 contain-1">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img className="rounded " id="Landingpage_01" src={require('../src/images/colleagues-working-project-discussing-details 1.png')} width="100%" height="100%" />
                    </div>
                    <div class="col-md-8 we-do-text">
                        <div class="card-body ms-5">
                            <h1 class="card-title">What we do</h1>
                            <p class="card-text">KaaS is a prominent one-stop solution for all your learning
                                needs. The courses have been designed and developed from
                                the learners perspective. With this software, you may learn
                                the skills you need to advance professionally and personally.
                                More than 200 topics are available in the app. Experts from
                                the real world will assist you in selecting the most appropriate
                                course for your objectives. Master the skills to grow professionally
                                and personally with this app.</p>
                            <h5>Upgrading knowledge level and skill set</h5>
                            <p>You may upskill yourself and prepare for professional progress by taking
                                advantage of the courses provided.
                            </p>
                            <h5>Industry expert instructors.</h5>
                            <p>The courses are created and taught by experts in the field.
                            </p>
                            <h5>Learn at your convenience</h5>
                            <p>You can learn at your own speed and in the comfort of your own
                                home.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid p-5 my-5 bg-danger text-white our-product" >
                    <h1><b>Our Product</b></h1>
                </div>
            </div>
            <h1><b>popular courses</b></h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img className="rounded " id="Landingpage_01" src={require('../src/images/ai2.png')} width="100%" height="100%" />
                        <div class="card-body">
                            <h3 class="card-title">AWS Lambda Foundation</h3><img className="rounded " id="Landingpage_01" src={require('../src/images/badges.png')} width="5%" height="5%" />
                            <br></br>
                            <img className="rounded " id="Landingpage_01" src={require('../src/images/ai2.png')} width="5%" height="5%" /> <h6>AWS authorised instructor</h6><a href="#" class="stretched-link">Konw more</a>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer text-center">
                        <button className="btn btn-danger active enroll-now-btn" onClick={routeChange}>
                        Enroll Now
                    </button>
                            {/* <a href="#" class="btn btn-danger active enroll-now-btn" role="button" data-bs-toggle="button" aria-pressed="true">Enroll Now</a> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img className="rounded " id="Landingpage_01" src={require('../src/images/Ai.png')} width="100%" height="100%" />
                        <div class="card-body">
                            <h3 class="card-title">AWS Lambda Foundation</h3><img className="rounded " id="Landingpage_01" src={require('../src/images/badges.png')} width="5%" height="5%" />
                            <br></br>
                            <img className="rounded " id="Landingpage_01" src={require('../src/images/ai2.png')} width="5%" height="5%" /> <h6>AWS authorised instructor</h6><a href="#" class="stretched-link">Know more</a>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-danger active enroll-now-btn" role="button" data-bs-toggle="button" aria-pressed="true" width="30%">Enroll Now</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img className="rounded " id="Landingpage_01" src={require('../src/images/ai2.png')} width="100%" height="100%" />
                        <div class="card-body">
                            <h3 class="card-title">AWS Lambda Foundation</h3><img className="rounded " id="Landingpage_01" src={require('../src/images/badges.png')} width="5%" height="5%" />
                            <br></br>
                            <img className="rounded " id="Landingpage_01" src={require('../src/images/ai2.png')} width="5%" height="5%" /> <h6>AWS authorised instructor</h6><a href="#" class="stretched-link " >Know more</a>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-danger active enroll-now-btn" role="button" data-bs-toggle="button" aria-pressed="true">Enroll Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container p-5 my-5 bg-white text-black our-product" >
                <h1><b>Number Speak</b></h1>
            </div>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-3">
                        <h1> <b>200s+ </b> </h1>
                        <h5>Courses</h5>
                    </div>
                    <div class="vl-1 text-center"></div>
                    <div class="col-sm-3">
                        <h1> <b>200+</b></h1>
                        <h5>Industry experts</h5>
                    </div>
                    <div class="vl"></div>
                    <div class="col-sm-3">
                        <h1><b>5000+</b></h1>
                        <h5>Trained professionals</h5>
                    </div>
                    <div class="vl-2">asd</div>

                    <div class="col-sm-3">
                        <h1><b>200+</b></h1>
                        <h5>Top ranked Programs</h5>
                    </div>
                </div>
            </div>
            <div class="card-body mt-5 text-center">
                <h1 class="card-title"><b>Are You Ready To upgrade?</b></h1>
                <p class="card-text"><h6>join the journey towards an upskilled future<br />
                    by reskilling yourself with KaaS</h6></p>
                <input type="text" className="form-control-1" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" /><br />
                <a href="#" class="btn btn-danger subscribe-btn">Subscribe</a>
            </div>
            <div className="col">
                <img className="rounded" id="Landingpage_01" src={require('../src/images/graphic landing page.png')} width="100%" height="20%" />
            </div>
            <div class="container-fluid p-5 bg-secondary text-white text-center">
                <div class="container mt-1">
                    <div class="row">
                        <div class="col-sm-4">
                            <div className="col">
                            <img className="rounded float-start ftr-logo" src={require('../src/images/kaas logo white 2.png')} /><br />
                            </div><br></br>
                            <div className="col mt-4">
                            <div className="text-footer">The DataTech Labs Inc Cloud based learning
                                platform we help you cultivate a culture of
                                personalized, learner-driven, and social
                                learning to ensure your organization is prepared
                                for the future.
                            </div></div>

                        </div>
                        <div class="col-sm-4 mt-5">
                            <div className="text-footer">Contact us :<br />
                                reachus@worldtdtl.world </div>
                            <div className="p-0">
                                <ul className="social_media_logo_list p-0">
                                    <li className="so_media_logo mx-1"> <GrFacebookOption /> </li>
                                    <li className="so_media_logo px-1 mx-1"> <AiOutlineInstagram /> </li>
                                    <li className="so_media_logo px-1 mx-1"> <FaTwitter /> </li>
                                    <li className="so_media_logo px-1 mx-1"> <IoLogoYoutube /> </li>
                                    <li className="so_media_logo px-1 mx-1"> <FaLinkedinIn /> </li>
                                </ul>
                            </div>
                            <div className="text-footer">
                                <p>Quick Links :<br />
                                    Privacy Policy<br />
                                    Terms and Conditions</p>
                            </div>
                        </div>
                        <div class="col-sm-4 mt-5">
                            <div class="text-start">Available on :</div>
                            {/* <span className="span-avail"><h6>Available on :</h6></span> */}
                            < img className="rounded float-start apple-store" src={require('../src/images/apple store.png')} />
                            < img className="rounded float-start play-store" src={require('../src/images/play store.png')} /><br />
                            <br />
                            <div class="text-start">Available on :</div>
                            <br />
                            <div class="text-start">
                                <input type="text" className="form-control-2" placeholder="Enter Your Email Address" aria-label="Enter Your Email Address" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-danger get-started-btn1" type="button" id="button-addon2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-mt-12 center">
                    <p className="colorcodeptag">2022 Kaas. All rights reserved I Designed, Developed & Maintained by <span className="spantagcolorcode">The Data Tech Labs inc</span></p>
                </div>
            </div>
        </div > //Container justify-content center
    );
}

export default LoginLayout