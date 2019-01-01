import React, { Component } from 'react';
import TitleBar from './components/TitleBar.js'
import Tab from './components/Tab.js'
import logo from './img/logo.svg'
import './css/App.css';

class MainPage extends Component {
  render() {
    return (
      <div id='app'>
        <TitleBar icon={logo} title='Remote Desktop'/>
        <Tab items={[{text:'New remote screen', content:null}]}/>
      </div>
    );
  }
}

export default MainPage;
