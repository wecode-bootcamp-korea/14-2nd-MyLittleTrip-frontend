import React, { Component } from "react";
// import "./AgreeCheckBox.scss";

class AgreeCheckBox extends Component {
  render() {
    return (
      <div className="AgreeCheckBox">
        <div className="content">
          <input
            type="checkbox"
            checked={this.props.checked}
            id={this.props.id}
            onChange={this.props.delegate}
          />
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }
}
export default AgreeCheckBox;
