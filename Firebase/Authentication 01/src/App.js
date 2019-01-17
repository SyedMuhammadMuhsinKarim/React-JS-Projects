import React, { Component } from 'react';
import './App.css';
import Login from './Screens/Login';
import firebase from './Config/Firebase';
import SignUp from './Screens/Signup';
import { Button } from 'antd';
// import * as firebase from 'firebase/app'
// import { firestore } from 'firebase';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      login: false,
      signUp: false,
      isSignUp: false,
      isLogin: true,
      email: "",
      pass: "",
      username: "",
      user: null,
      errorCode: "",
      errorMessage: '',
    }

    //Form Grtting Input
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);

    //Action Signing
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  onChangePass(event) {
    this.setState({ pass: event.target.value });
    console.log(this.state.pass);
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  signIn(e) {
    e.preventDefault();
    const { email, pass } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(res => {
        console.log(res.user.uid);
        localStorage.setItem("email", email);
        localStorage.setItem("uid", res.user.uid);
        const user = res.user;

        this.setState({ user });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({ errorCode, errorMessage });
        console.log("mess", errorMessage);
        console.log("code", errorCode);
      });

    e.preventDefault();
  }

  signUp(e) {
    e.preventDefault();
    const { username, email, pass } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(res => {
        console.log('res =>', res.user.uid);
        firebase.firestore().collection('users').doc(res.user.uid).set({ username, email })
          .then(() => {
            console.log('Added in db');
          })
          .catch((e) => {
            console.log('error Adding in db');
          })
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({ errorCode, errorMessage });
        console.log("mess", errorMessage);
        console.log("code", errorCode);
      });
  }

  signOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  componentDidMount() {
    if ('email' in localStorage) {
      this.setState({ isLogin: false })
    }

    const user = firebase.auth().currentUser;
    if (user) {
      console.log('User is signed in.')
    }
    else {
      console.log('No user is signed in.');
    }
  }

  render() {
    const { login, signUp, isSignUp, user, isLogin, errorCode, errorMessage } = this.state;
    return (
      <div className="App">
        {!user && !login && isLogin && !isSignUp &&
          <Login
            onChangeEmail={this.onChangeEmail}
            onChangePass={this.onChangePass}
            onClick={this.signIn}
          ></Login>
        }

        {!user && !login && isLogin && !isSignUp &&
          <span>{errorCode}: {errorMessage}</span>
        }

        {!user && !signUp && !isLogin && isSignUp &&
          <SignUp
            onChangeEmail={this.onChangeEmail}
            onChangeUsername={this.onChangeUsername}
            onChangePass={this.onChangePass}
            onClick={this.signUp}
          />
        }

        {user && <Button onClick={this.signOut} className="btn btn-lg btn-block btn-primary">Signout</Button>}
      </div>
    );
  }
}

export default App;
