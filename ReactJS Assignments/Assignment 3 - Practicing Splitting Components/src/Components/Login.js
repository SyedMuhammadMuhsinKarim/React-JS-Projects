import React, { Component } from "react";

class Login extends Component {
    render() {
        const {onClick, onChangeEmail, onChangePass} = this.props;
        return (
            <div>
                <form>
                    <input type="email" placeholder="ای میل لکھیں" onChange={onChangeEmail} />
                    <input type="password" placeholder="پاسورڈ لکھیں" onChange={onChangePass} />
                    <input type="submit" onClick={onClick} value="لاگ ان کریں" />
                </form>
            </div>
        );
    }
}

export default Login;
