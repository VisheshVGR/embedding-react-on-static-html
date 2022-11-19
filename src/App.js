import React, { useEffect } from "react"
import './App.css';
import { Route, Routes } from "react-router-dom"

import Login from "./Login"
import Register from "./Register"

const App = () => {
  const URL = window.location.href

  useEffect(() => {
    alert(URL.split('/').pop())

  })
  return (
    <>
      <h1>Appjs</h1>
      <Routes>
        <Route path={URL.split('/').pop()} element={<Login />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/reg"} element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
