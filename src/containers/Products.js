import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeSeacrhValue } from "../actions/baseActions.js";
import PropTypes from "prop-types";
import Item from "./Item";
import Table from "../components/Table";

class Products extends React.Component {
  componentDidMount() {
    this.props.updateSearchValue("");
  }
  render() {
    const { baseData, searchValue, updateSearchValue } = this.props;
    const ProductsFiltered = baseData.productsBase.filter(item => {
      return (
        item.name.search(searchValue.searchValue) !== -1 ||
        searchValue.searchValue === ""
      );
    });
    const Items = ProductsFiltered.map((item, i) => {
      return (
        <Item
          itemData={item}
          baseData={baseData.productsBase}
          key={item.id}
          index={i}
          parent={"Products"}
        />
      );
    });
    const tableSearch = () => {
      let searchValue = document.getElementById("mySearch").value;
      updateSearchValue(searchValue);
    };
    return (
      <React.Fragment>
        <input
          type="search"
          id="mySearch"
          placeholder="Введите часть названия товара"
          onKeyUp={tableSearch}
        />
        <Table items={Items} />
        <div className="buttonsBasket">
          <Link to="/basket" className="buttonStyle">
            Корзина
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseData: state.base,
    searchValue: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchValue: value => dispatch(changeSeacrhValue(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

Products.propTypes = {
  baseData: PropTypes.object.isRequired
};
