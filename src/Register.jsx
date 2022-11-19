import React from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  let navigate = useNavigate();

    return (
        <>
    <button onClick={() => navigate("/")}>Log</button>
            Register
        </>
    )
}

export default Register