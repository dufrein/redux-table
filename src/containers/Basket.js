import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeCountClearBasket } from "../actions/baseActions.js";
import PropTypes from "prop-types";
import Item from "./Item";
import THeader from "../components/Theader";

class Basket extends React.Component {
  clearBasket = () => {
    let productsBase = [...this.props.baseData.productsBase];
    productsBase.forEach(item => {
      item.count = 0;
    });
    this.props.changeCountClearBasket(productsBase);
  };
  render() {
    const { baseData } = this.props;

    let Items = baseData.productsBase.filter(item => {
      return item.count > 0;
    });
    let totalCost = 0;
    Items = Items.map((item, i) => {
      totalCost = totalCost + item.count * item.price;
      return (
        <Item
          itemData={item}
          baseData={this.props.baseData.productsBase}
          key={item.id}
          index={i}
          parent={"Basket"}
        />
      );
    });
    Items = Items.length !== 0 ? Items : null;
    const emptyBasket = (
      <tr>
        <td />
        <td>
          <br />
          Корзина пуста
        </td>
        <td />
      </tr>
    );
    totalCost = "Всего на: $" + totalCost;
    return (
      <React.Fragment>
        <table className="tabProds">
          <THeader />
          <tbody>{Items || emptyBasket}</tbody>
          <tfoot>
            <tr>
              <td>{totalCost}</td>
            </tr>
          </tfoot>
        </table>
        <div className="buttonsBasket">
          <Link to="/" className="buttonStyle">
            {" "}
            Перейти в список товаров
          </Link>
          <button
            className="buttonStyle"
            style={{ float: "right" }}
            onClick={this.clearBasket}
          >
            Очистить корзину
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseData: state.base
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCountClearBasket: baseData =>
      dispatch(changeCountClearBasket(baseData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);

Basket.propTypes = {
  baseData: PropTypes.object.isRequired
};
