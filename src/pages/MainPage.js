import React, { Component } from 'react';
import TitleBar from './components/TitleBar.js'
import logo from './img/logo.svg'
import './css/App.css';

class MainPage extends Component {
  render() {
    return (
      <div id="app">
        <TitleBar icon={logo} title="Remote Desktop"/>
     
      </div>
    );
  }
}

export default MainPage;
