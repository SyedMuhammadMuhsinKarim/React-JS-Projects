import React from 'react';
import '../Login/index.css';
import Input from '../../Elements/Input';
import Button from '../../Elements/Button';

const Login = ({ onClick, onChangeEmail, onChangePass }) =>
  <form className="container" onSubmit={onClick}>
    <h3>Login</h3>
    <div className="form-group">
      <Input
        type="email"
        className="form-control"
        onChange={onChangeEmail}
        placeholder="Ener Email"
      />
    </div>

    <div className="form-group">
      <Input
        type="password"
        className="form-control"
        onChange={onChangePass}
        placeholder="Enter Password"
      />
    </div>

    <div className="form-group">
      <label>Forget Password?</label> <label>Not Register Yet?</label>
    </div>

    <Button type="submit" onClick={onClick} className="btn btn-lg btn-block btn-primary">Login</Button>
  </form>


export default Login;