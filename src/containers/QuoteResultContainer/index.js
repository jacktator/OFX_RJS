import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import API from "../../api/API";
import {SET_QUOTE} from "../../utils/actions";
import {useStoreContext} from "../../utils/store";
import QuoteResult from "../../components/QuoteResult";

const QuoteResultContainer = ({from, to, amount}) => {

  const [state, dispatch] = useStoreContext();

  const {
    loading,
    result
  } = state;

  useEffect(() => {
    // Deliberate using from, to, amount from props (from route) rather than state
    // This is to ensure, even if use refresh/revisit the page, or visit a different route, the data is always correct
    API.getQuote(from, to, amount)
      .then(res => dispatch({ type: SET_QUOTE, result: res.data }))
      .catch(err => console.log(err));
  }, [from, to, amount, dispatch]);

  return (
    <QuoteResult loading={loading}
                 from={from}
                 to={to}
                 amount={amount}
                 result={result}/>
  );
};

QuoteResultContainer.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default QuoteResultContainer;
