import React from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  let navigate = useNavigate();
  return (
        <>
    <button onClick={() => navigate("/reg")}>Reg</button>
            Login
        </>
    )
}

export default Login