import {
  CHANGE_COUNT_ADD,
  CHANGE_COUNT_DELETE,
  CHANGE_COUNT_DELETE_ALL,
  CHANGE_COUNT_CLEAR_BASKET
} from "../actionTypes";

const initialState = {
  productsBase: [
    { name: "apple", id: 1, price: 11, count: 0 },
    { name: "pear", id: 2, price: 6, count: 0 },
    { name: "mandarine", id: 3, price: 14, count: 0 },
    { name: "orange", id: 4, price: 23, count: 0 },
    { name: "pineapple", id: 5, price: 17, count: 0 }
  ]
};

export const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNT_ADD:
      return {
        ...state,
        productsBase: state.productsBase.map(item => {
          if (item.id === action.payload) {
            item.count++;
          }
          return item;
        })
      };
    case CHANGE_COUNT_DELETE:
      return {
        ...state,
        productsBase: state.productsBase.map(item => {
          if (item.id === action.payload) {
            item.count--;
          }
          return item;
        })
      };
    case CHANGE_COUNT_DELETE_ALL:
      return {
        ...state,
        productsBase: state.productsBase.map(item => {
          if (item.id === action.payload) {
            item.count = 0;
          }
          return item;
        })
      };
    case CHANGE_COUNT_CLEAR_BASKET:
      return {
        ...state,
        productsBase: state.productsBase.map(item => {
          item.count = 0;
          return item;
        })
      };
    default:
      return state;
  }
};
