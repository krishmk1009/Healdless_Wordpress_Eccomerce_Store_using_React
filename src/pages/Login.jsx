import React, { useState } from 'react';
import axios from 'axios'
import './styles/Login.css'; // Importing the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const api = "http://localhost/firstproject/wp-json/jwt-auth/v1/token"
console.log(localStorage.getItem('user'))
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const data = await axios.post(api, {
        'username': username,
        'password': password,

      },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        })

      if (data) {
        console.log(data.data);
        localStorage.setItem('user', JSON.stringify(data.data))
        alert(data.data.user_nicename)
      }
      else {
        console.log("null data")
      }
    } catch (error) {
      console.log(error)
    }



    // Add your login logic here
    console.log('Email:', username);
    console.log('Password:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
