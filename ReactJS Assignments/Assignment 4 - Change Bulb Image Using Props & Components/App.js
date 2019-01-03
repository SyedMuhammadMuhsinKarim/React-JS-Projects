import React, { Component } from 'react';
import './App.css';
import Bulb from './components/Bulb/bulb';
import Light from './components/LightBulb/light';
import Break from './components/BreakBulb/break-bulb';
import image01 from "./images/breaking.jpg";
import image02 from "./images/bulb.jpg";
import image03 from "./images/ligth.png";

class App extends Component {
  constructor() {
    super();

    this.state = {
      bulb: false,
      light: true,
      breaking: false,
    }

    this.light = this.light.bind(this);
    this.lightOf = this.lightOf.bind(this);
    this.breaking = this.breaking.bind(this);
  }

  light() {
    this.setState ({
      bulb: false,
      light: true,
      breaking: false
    })
  }

  breaking() {
    this.setState({
      bulb: false,
      light: false,
      breaking: true
    })
  }

  lightOf() {
    this.setState({
      bulb: true,
      light: false,
      breaking: false
    })
  }

  render() {
    const { bulb, light, breaking } = this.state;
    return (
      <div className="App">
        <Bulb text="Switch Off" onPress={this.lightOf} />
        <Light text="Switch On" onPress={this.light} />
        <Break text="Break" onPress={this.breaking}/>

        {bulb && !light && !breaking && <img width="200" alt=" " src={image02} />}
        {!bulb && light && !breaking && <img width="200" alt=" " src={image03} />}
        {!bulb && !light && breaking && <img width="200" alt=" " src={image01} />}
      </div>
    );
  }
}

export default App;
