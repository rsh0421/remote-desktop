import React, { Component } from 'react';
import './css/TitleBar.css';

const {remote} = window.require('electron');
const currentWindow = remote.getCurrentWindow();

class TitleBar extends Component {
  state = {
    maximizeClassName:(currentWindow.isMaximized())? 'maximize' : 'default'
  };

  appMinimize() {
    currentWindow.minimize();
  }

  appMaximize() {
    
    if(currentWindow.isMaximized()){
      currentWindow.unmaximize();
      this.setState({maximizeClassName:'default'});
    }else{
      currentWindow.maximize();
      this.setState({maximizeClassName:'maximize'});
    }
  }

  appClose() {
    currentWindow.hide();
  }

  render() {
    return (
      <div id="title_bar" className={this.state.maximizeClassName}>
        <div className="title_bar_drag_box" style={{appRegion:'drag'}}></div>
        <div className="title_bar_icon"><img alt="logo image" src={this.props.icon}/></div>
        <div className="title_bar_text" id="title">{this.props.title}</div>
        <div className="title_bar_buttons">
          <a id="app_minimize" onClick={()=>this.appMinimize()}><span className="icon"></span></a>
          <a id="app_maximize" onClick={()=>this.appMaximize()}><span className="icon"></span></a>
          <a id="app_close" onClick={()=>this.appMinimize()}><span className="icon"></span></a>
        </div>
      </div>
    );
  }
}

export default TitleBar;
