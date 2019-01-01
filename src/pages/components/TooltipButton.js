import React, { Component } from 'react';
import {Tooltip} from 'reactstrap';
import './css/TooltipButton.css';

class TooltipButton extends Component {

  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isTooltip: false
    };
  }

  toggle(){
    this.setState({isTooltip: !this.state.isTooltip});
  }

  render() {
    return (
      <span>
        <button className="tooltip-btn blue" id={'tooltip-button-' + this.props.id}><a onClick={this.props.onClick}>{this.props.children}</a></button>
        <Tooltip placement={this.props.placement} isOpen={this.state.isTooltip} target={'tooltip-button-' + this.props.id} toggle={this.toggle}>{this.props.tooltip}</Tooltip>
      </span>
    );
  }
}

export default TooltipButton;