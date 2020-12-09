import React, { Component } from "react";

class AgreeCheckBox extends Component {
  render() {
    return (
      // const {}

      <div className="General">
        <div className="content">
          <input type="checkbox" checked={this.props.checked} id={this.props.id} onChange={this.props.delegate} />
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default AgreeCheckBox;
