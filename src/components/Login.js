import React, { useState } from 'react';
import Dashboard from './Dashboard';
import './Login.css';

function Login() {

  const [modalVisible, setModalVisible] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const submit = (data) => {
    setLoginData(data);
    setModalVisible(!modalVisible);
    setLoggedIn(true);
  }

  if (!loggedIn) {
    if (!modalVisible) {
      return (
        <div className="Login">
          <button className="login-button" onClick={() => setModalVisible(!modalVisible)}> Log In </button>
          <button className="login-button" onClick={() => setModalVisible(!modalVisible)}> Sign Up </button>
        </div>
      );
    } else {
      return (
        <div className="Login">
        <div className="login-form">
          <label style={{textAlign: "left"}}>Username</label>
          <input type="text" onChange={(event) => setUsername(event.target.value)}></input>
          <label>Password</label>
          <input type="password"></input>
          <button onClick={() => submit({"username": username, "password": password})}> Login </button>
        </div>
        </div>
      );
    }
  } else {
    return (
      <Dashboard/>
    );
  }

}

export default Login;
