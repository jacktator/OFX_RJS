import initialState from "../state/state";
import reducer from "../state/reducer";
import {UPDATE_FORM, REQUEST_QUOTE, SET_QUOTE, RESET} from "../state/types";
import {FORM_DATA, RESULT_DATA} from "./data";

describe('OFX reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle UPDATE_FORM', () => {
    expect(
      reducer(initialState, {
        type: UPDATE_FORM,
        data: FORM_DATA
      })
    ).toEqual({
      ...initialState,
      ...FORM_DATA
    });
  });

  it('should handle REQUEST_QUOTE', () => {
    expect(
      reducer(initialState, {
        type: REQUEST_QUOTE,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle SET_QUOTE', () => {
    expect(
      reducer(initialState, {
        type: SET_QUOTE,
        result: RESULT_DATA,
      })
    ).toEqual({
      ...initialState,
      result: RESULT_DATA,
    });
  });

  it('should handle RESET', () => {
    expect(
      reducer(initialState, {
        type: RESET,
      })
    ).toEqual(initialState);
  });
});
