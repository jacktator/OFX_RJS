import * as types from "../store/types";
import * as actions from "../store/actions";
import {UPDATE_FORM} from "../store/types";
import {FORM_DATA, RESULT_DATA} from "./data";
import initialState from "../store/state";
import {REQUEST_QUOTE} from "../store/types";
import {RESET} from "../store/types";

describe('OFX actions', () => {
  it('should create an action to updateForm()', () => {
    const name = "firstName";
    const value = "Jack";

    const expectedAction = {
      type: types.UPDATE_FORM,
      data: {
        [name]: value
      }
    };
    expect(actions.updateForm(name, value)).toEqual(expectedAction)
  });

  it('should create an action to requestQuote()', () => {
    const expectedAction = {
      type: types.REQUEST_QUOTE,
    };
    expect(actions.requestQuote()).toEqual(expectedAction)
  });

  it('should create an action to setQuote()', () => {
    const expectedAction = {
      type: types.SET_QUOTE,
      result: RESULT_DATA
    };
    expect(actions.setQuote(RESULT_DATA)).toEqual(expectedAction)
  });

  it('should create an action to reset()', () => {
    const expectedAction = {
      type: types.RESET,
    };
    expect(actions.reset()).toEqual(expectedAction)
  });
});
