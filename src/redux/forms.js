// export const InitialFeedback = {
//   firstname: "",
//   lastname: "",
//   telnum: "",
//   email: "",
//   agree: false,
//   contactType: "Tel.",
//   message: "",
// };

import * as ActionTypes from "./ActionTypes";

export const InitialFeedback = (
  state = {
    errMess: null,
    feedbacks: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FEEDBACK_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_FEEDBACK:
      var fb = action.payload;
      return { ...state, feedbacks: state.feedbacks.concat(fb) };

    default:
      return state;
  }
};
