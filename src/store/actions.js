import {UPDATE_FORM, REQUEST_QUOTE, SET_QUOTE, RESET} from "./types";

export function updateForm(name, value) {
  return {
    type: UPDATE_FORM,
    data: {
      [name]: value
    }
  }
}

export function requestQuote() {
  return {
    type: REQUEST_QUOTE
  }
}

export function setQuote(result) {
  return {
    type: SET_QUOTE,
    result: result
  }
}

export function reset() {
  return {
    type: RESET
  }
}
