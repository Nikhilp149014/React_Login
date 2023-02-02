import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"
import LearningLogin from "./learningLogin"
import Login from "./Login"
import Home from "./Home"
import Register from "./Register"
import { LinkedInCallback } from "react-linkedin-login-oauth2";


function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
 
  return (
    <BrowserRouter>
      <Routes>
        {<Route path="/" element={<Login />} />}
        <Route path="/LearningLogin" element={<LearningLogin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/linkedin" component={LinkedInCallback} />

      </Routes>
    </BrowserRouter>
  )
}
}
export default App