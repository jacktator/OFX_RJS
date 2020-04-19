import React from 'react';
import QuoteForm from "../../components/QuoteForm";
import {useStoreContext} from "../../utils/store";
import { useHistory } from "react-router-dom";
import {UPDATE_FORM, REQUEST_QUOTE} from "../../utils/actions";

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
