import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import API from "../../api/API";
import {useStoreContext} from "../../state/store";
import QuoteResult from "../../components/QuoteResult";
import * as actions from "../../state/actions";

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
      .then(res => dispatch(actions.setQuote(res.data)))
      .catch(err => console.log(err));
  }, [from, to, amount, dispatch]);

  const onReset = () => dispatch(actions.reset());

  return (
    <QuoteResult loading={loading}
                 from={from}
                 to={to}
                 amount={amount}
                 result={result}
                 onReset={onReset}/>
  );
};

QuoteResultContainer.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default QuoteResultContainer;
