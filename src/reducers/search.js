import { CHANGE_VALUE } from "../actionTypes";

const initialState = {
  searchValue: ""
};

export const searchValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
