import React from 'react';
import QuoteForm from "../../components/QuoteForm";
import {useStoreContext} from "../../store/store";
import { useHistory } from "react-router-dom";
import * as actions from "../../store/actions";

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

    dispatch(actions.updateForm(name, value))
  };

  const submitForm = (event) => {

    dispatch(actions.requestQuote());

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
