import React, { useState } from 'react';
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("http://localhost:3001/users/list");
    const responseJson = await response.json();
    return setUsers(responseJson.data);
  }

  return (
    <div className="App">
      <button onClick={() => getUsers()}>CLICK</button>
      {users.map(user => (
      <p key={user.name + "1"} style={{"color": "black"}}>{user.name}</p>
    ))}
    </div>
  );
}

export default App;
