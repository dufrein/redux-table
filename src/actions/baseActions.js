import {
  CHANGE_COUNT_ADD,
  CHANGE_COUNT_DELETE,
  CHANGE_COUNT_DELETE_ALL,
  CHANGE_COUNT_CLEAR_BASKET,
  CHANGE_VALUE
} from "../actionTypes";

export const changeCountAdd = baseData => {
  return {
    type: CHANGE_COUNT_ADD,
    payload: baseData
  };
};

export const changeCountDelete = baseData => {
  return {
    type: CHANGE_COUNT_DELETE,
    payload: baseData
  };
};

export const changeCountDeleteAll = baseData => {
  return {
    type: CHANGE_COUNT_DELETE_ALL,
    payload: baseData
  };
};

export const changeCountClearBasket = baseData => {
  return {
    type: CHANGE_COUNT_CLEAR_BASKET,
    payload: baseData
  };
};

export const changeSeacrhValue = value => {
  return {
    type: CHANGE_VALUE,
    payload: value
  };
};
