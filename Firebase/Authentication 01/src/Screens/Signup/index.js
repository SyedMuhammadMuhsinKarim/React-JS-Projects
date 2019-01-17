import React from 'react';
import Input from '../../Elements/Input';
import Button from '../../Elements/Button';

const SignUp = ({ onClick, onChangeUsername, onChangeEmail, onChangePass }) =>
    <form className="container" onSubmit={onClick}>
        <h3>Registration</h3>

        <div className="form-group">
            <Input
                type="text"
                className="form-control"
                onChange={onChangeUsername}
                placeholder="Enter Username"
            />
        </div>

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
            <label>Already Register?</label>
        </div>

        <Button type="submit" onClick={onClick} className="btn btn-lg btn-block btn-primary">Register</Button>
    </form>

export default SignUp;