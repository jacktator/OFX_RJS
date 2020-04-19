import initialState from "./state";
import {
  UPDATE_FORM,
  REQUEST_QUOTE,
  SET_QUOTE,
  RESET
} from "./types"

const reducer = (state = initialState, action) => {
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
      };

    case SET_QUOTE:
      return {
        ...state,
        loading: false,
        result: action.result,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
