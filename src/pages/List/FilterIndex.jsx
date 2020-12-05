import React, { Component } from "react";

class FilterIndex extends Component {
  render() {
    const { items } = this.props;
    return (
      <li>
        <input type="checkbox" />
        <span className="airlineName">{items}</span>
      </li>
    );
  }
}

export default FilterIndex;
