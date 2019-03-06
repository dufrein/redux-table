import React from "react";
import {
  changeCountAdd,
  changeCountDelete,
  changeCountDeleteAll
} from "../actions/baseActions.js";
import { connect } from "react-redux";

class Item extends React.Component {
  render() {
    this.baseData = this.props.baseData.productsBase;
    const button = (parent => {
      if (parent === "Basket") {
        return (
          <td>
            <button
              className="buttonTableStyle"
              onClick={() => this.buttonClickDelete()}
            >
              -
            </button>
            <button
              className="buttonTableStyle"
              onClick={() => this.buttonClickDeleteAll()}
            >
              Удалить все
            </button>
          </td>
        );
      } else {
        return (
          <td>
            <button
              className="buttonTableStyle"
              onClick={() => this.buttonClickAdd()}
            >
              +
            </button>
          </td>
        );
      }
    })(this.props.parent);
    return (
      <tr>
        <td> {this.props.itemData.name}</td>
        <td>{this.props.itemData.price}</td>
        <td>{this.props.itemData.count}</td>
        {button}
      </tr>
    );
  }
  buttonClickAdd = () => {
    this.props.changeCountAdd(this.props.itemData.id);
  };
  buttonClickDelete = () => {
    this.props.changeCountDelete(this.props.itemData.id);
  };
  buttonClickDeleteAll = () => {
    this.props.changeCountDeleteAll(this.props.itemData.id);
  };
}

const mapStateToProps = store => {
  return {
    baseData: store.base
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCountAdd: baseData => dispatch(changeCountAdd(baseData)),
    changeCountDelete: baseData => dispatch(changeCountDelete(baseData)),
    changeCountDeleteAll: baseData => dispatch(changeCountDeleteAll(baseData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
