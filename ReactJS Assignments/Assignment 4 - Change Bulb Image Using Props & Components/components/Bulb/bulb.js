import React, { Component } from 'react';
// import logo from './logo.svg';
import './../../App.js';
// import image01 from "./../../images/breaking.jpg";
// import image02 from "./../../images/bulb.jpg";
// import image03 from "./../../images/ligth.png";

class Bulb extends Component {
    // constructor() {
    //     super();

    //     this.state = {

    //     }
    // }

    render() {
        const {text, onPress} = this.props;
        return (
            <div>
                <button onClick={onPress}>{text}</button>
            </div>
        );
    }
}

export default Bulb;
