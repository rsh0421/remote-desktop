import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import './css/RemoteScreen.css';

class RemoteScreen extends Component {
  state = {
    isConnected: false
  };

  toggle(index){
    if(this.state.activeTab !== index){
      this.setState({activeTab:index});
    }
  }

  render() {
    return (
      <div className="remote">
        {!this.state.isConnected && this.loginRender()}
        {this.state.isConnected && this.screenRender()}
      </div>
    );
  }

  loginRender(){
    return (
      <div className="login">
        <h5>Remote Desktop</h5>
        <br/>
        <InputGroup>
          <Input placeholder="IP or Hostname"/>
        </InputGroup>
        <br/>
        <InputGroup>
          <Input placeholder="Hashcode"/>
        </InputGroup>
        <br/>
        <Button color="primary" block>Connect</Button>
      </div>
    );
  }

  screenRender(){
    return (
      <div className="remote-screen">
        <video />
      </div>
    );
  }
}

export default RemoteScreen;