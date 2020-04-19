import defaultState from "./state";
import {
  UPDATE_FORM,
  REQUEST_QUOTE,
  SET_QUOTE,
  RESET
} from "./actions"

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        ...action.data
      };

    case REQUEST_QUOTE:
      return {
        ...state,
        loading: true,
        result: null,
      };

    case SET_QUOTE:
      return {
        ...state,
        loading: false,
        result: action.result,
      };

    case RESET:
      return defaultState;

    default:
      return state;
  }
};

export default reducer;
