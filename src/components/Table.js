import React from "react";
import THeader from "./Theader";

export default class Table extends React.Component {
  render() {
    return (
      <table className="tabProds">
        <THeader />
        <tbody>{this.props.items}</tbody>
      </table>
    );
  }
}
