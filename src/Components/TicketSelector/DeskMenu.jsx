import React, { Component } from "react";
import styled from "styled-components";

const sortingLocations = (data) => {
  let result = [];
  let locationsLeft = [...data];
  while (locationsLeft.length >= 4) {
    let sliced = locationsLeft.slice(0, 4);
    result.push(sliced);
    locationsLeft.splice(0, 4);
  }
  if (locationsLeft.length !== 0) result.push(locationsLeft);
  return result;
};

class DeskMenu extends Component {
  constructor() {
    super();
    this.state = {
      sortedLocations: [],
    };
  }

  componentDidMount() {
    const sortedLocations = sortingLocations(this.props.locate);

    this.setState({ sortedLocations });
  }

  handleTdvalue = (e) => {
    if (this.props.selectDepPlace) {
      this.props.selectDepPlace(e);
    } else {
      this.props.selectArrPlace(e);
    }
    this.props.closeDestination();
  };

  render() {
    const {
      region,
      selectDepPlace,
      selectArrPlace,
      closeDestination,
    } = this.props;
    const { sortedLocations } = this.state;
    return (
      <DeskList>
        <Thead>
          <tr>
            <th>{region}</th>
          </tr>
        </Thead>
        <Tbody>
          {sortedLocations.map((locate, idx) => (
            <tr key={idx}>
              {locate.map((el, index) => (
                <td
                  key={index}
                  className="deskList"
                  onClick={this.handleTdvalue}
                >
                  {el}
                </td>
              ))}
            </tr>
          ))}
        </Tbody>
      </DeskList>
    );
  }
}

const border = "1px solid rgba(0, 0, 0, 0.1)";

const DeskList = styled.div`
  display: flex;
  width: 681px;

  border-bottom: ${border};
`;

const Thead = styled.thead`
  display: flex;
  align-items: center;

  th {
    display: flex;
    justify-content: flex-start;
    width: 84px;
    padding: 14px 8px;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: center;

  tr {
    display: flex;
    align-items: center;
    margin: auto 0;
    td {
      width: 150px;
      margin: auto 0;
      padding: 15px 0 15px 5px;

      cursor: pointer;
    }
  }
  tr + tr {
    border-top: ${border};
  }
`;
export default DeskMenu;
