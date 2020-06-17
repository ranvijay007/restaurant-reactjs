import { DISHES } from "../shared/dishes";
import * as ActionTypes from "./ActionTypes";

export const Dishes = (state = DISHES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      console.log("dish");
      return state;
    default:
      return state;
  }
};
