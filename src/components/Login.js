import React, { useState } from 'react';
import './Login.css';

function Login() {

  const [modalVisible, setModalVisible] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = (data) => {
    setLoginData(data);
    setModalVisible(!modalVisible);
  }
  
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
  
}

export default Login;
