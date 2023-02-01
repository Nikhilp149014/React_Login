import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"
import LearningLogin from "./learningLogin"
import Login from "./Login"
import Home from "./Home"
import Register from "./Register"



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

      </Routes>
    </BrowserRouter>
  )
}
}
export default App