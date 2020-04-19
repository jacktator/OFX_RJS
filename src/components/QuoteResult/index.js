import React from 'react';
import PropTypes from 'prop-types';
import {QuoteResultWrapper} from "./style";
import SpotRateResult from "../../constants/SpotRateResult";

const QuoteResult = ({loading, from, to, amount, result}) => {
  return (
    <QuoteResultWrapper>
      {from} {to} {amount} {result && result.CustomerAmount}
    </QuoteResultWrapper>
  );
};

QuoteResult.propTypes = {
  loading: PropTypes.bool.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  result: SpotRateResult,
};

export default QuoteResult;
