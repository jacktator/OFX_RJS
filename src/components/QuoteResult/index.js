import React from 'react';
import PropTypes from 'prop-types';
import {QuoteResultWrapper} from "./style";
import SpotRateResult from "../../constants/SpotRateResult";

const QuoteResult = ({from, to, amount, result}) => {
  return (
    <QuoteResultWrapper>
      {from} {to} {amount} {result.CustomerAmount}
    </QuoteResultWrapper>
  );
};

QuoteResult.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  result: SpotRateResult.isRequired,
};

export default QuoteResult;
