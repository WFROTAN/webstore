import React from 'react';
import '../css/Login.scss'

var Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <form className="login__form">
          <div className="login__header">
            Login
          </div>
          <div className="login__input">
            <label>Email Address:</label>
            <input type="email" name="email"></input>
            <label>Password:</label>
            <input type="password" name="password"></input>
          </div>
          <div className="login__button">
              <button type="submit">Login</button>
            </div>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="create-account">
        <form className="create-account__form">
          <div className="create-account__header">
            Create an account
          </div>
          <div className="create-account__input">
            <label>Email Address:</label>
            <input type="email" name="email"></input>
            <div className="create-account__password">
              <label>Password:</label>
              <input type="password" name="password"></input>
              <label>Confirm Password:</label>
              <input type="password" name="password"></input>
            </div>
            <div className="create-account__button">
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;