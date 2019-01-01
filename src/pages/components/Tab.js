import React, { Component } from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane, Tooltip} from 'reactstrap';
import TooltipButton from './TooltipButton.js'
import RemoteScreen from './RemoteScreen.js'
import './css/Tab.css';

class Tab extends Component {
  state = {
    activeTab: this.props.active || 0,
    items: this.props.items || []
  };

  toggle(index){
    if(this.state.activeTab !== index){
      this.setState({activeTab:index});
    }
  }

  onTabAddClick(){
    this.state.items.push({text:'New remote screen', content:null});
    this.setState({items:this.state.items});

    this.toggle(this.state.items.length-1);
  }

  onTabRemoveClick(index){
    this.state.items.splice(index, 1);
    this.setState({items:this.state.items});

    if(this.state.items.length <= this.state.activeTab){
      this.toggle(this.state.items.length-1);
    }
  }

  render() {
    return (
      <div id="tab">
        <Nav tabs>
          {this.state.items.map((item, index)=>{
            return (
              <NavItem key={index}>
                <NavLink className={getClassName({active:this.state.activeTab === index})} onClick={()=>{this.toggle(index);}}>{item.text}</NavLink>
                <a className="tab-close" onClick={(e)=>{e.preventDefault(); this.onTabRemoveClick(index);}}><span className="icon-image" id="close-icon">close</span></a>
              </NavItem>
            );
          })}
          <TooltipButton id="tab-add" placement="bottom" tooltip="Add new remote screen" onClick={()=>{this.onTabAddClick()}}><span className="icon-image" id="add-icon">Add</span></TooltipButton>
        </Nav>
        <div className="tab-menu"></div>
        <TabContent activeTab={this.state.activeTab}>
          {this.state.items.map((item, index)=>{
            return <TabPane key={index} tabId={index}><RemoteScreen/></TabPane>
          })}
        </TabContent>
      </div>
    );
  }
}

function getClassName(obj){
  let className;
  for(let i in obj){
    if(obj[i]){
      className = (className === undefined)? i : ' ' + i;
    }
  }

  return className;
}

export default Tab;