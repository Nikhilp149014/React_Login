import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"
import Login from "./Login"
import Landing from "./Landing"
import Home from "./Home"
import Register from "./Register"
import Landing_Page from "./Landing_Page"
import { LinkedInCallback } from "react-linkedin-login-oauth2";


function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
 
  return (
    <BrowserRouter>
      <Routes>
        {<Route path="/" element={<Landing />} />}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Landing_Page" element={<Landing_Page />} />

        <Route exact path="/linkedin" component={LinkedInCallback} />

      </Routes>
    </BrowserRouter>
  )
}
}
export default App