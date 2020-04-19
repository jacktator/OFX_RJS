import React from 'react';
import QuoteForm from "../../components/QuoteForm";
import {useStoreContext} from "../../store/store";
import { useHistory } from "react-router-dom";
import {UPDATE_FORM, REQUEST_QUOTE} from "../../store/types";

const QuoteFormContainer = () => {

  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  const {
    firstname,
    lastName,
    email,
    phoneNumber,
    from,
    to,
    amount,
    loading
  } = state;

  const onChange = (event) => {

    const {
      name,
      value
    }  = event.target;

    // TODO: Validation & Sanitization

    dispatch({
      type: UPDATE_FORM,
      data: {
        [name]: value
      }
    })
  };

  const submitForm = (event) => {

    dispatch({
      type: REQUEST_QUOTE
    });

    history.push(`/${from}/${to}/${amount}`);
  };

  return (
    <QuoteForm firstname={firstname}
               lastName={lastName}
               email={email}
               phoneNumber={phoneNumber}
               from={from}
               to={to}
               amount={amount}
               loading={loading}
               onChange={onChange}
               onSubmit={submitForm}/>
  );
};

export default QuoteFormContainer;
