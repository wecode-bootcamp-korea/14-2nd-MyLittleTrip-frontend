import React, { Component } from "react";

class FilterIndex extends Component {
  chooseAirline = (e) => {
    const { items, item } = this.props;
    this.props.handleCheckboxValue(items.id, item.id);
  };

  render() {
    const { items, item, handleCheckboxValue } = this.props;
    return (
      <li>
        <input
          checked={item.checked}
          type="checkbox"
          onChange={this.chooseAirline}
        />
        <span className="airlineName">{item.name}</span>
      </li>
    );
  }
}

export default FilterIndex;
