import React from 'react';
import PropTypes from 'prop-types';
import {Header, QuickQuoteWrapper} from "./style";
import QuoteForm from "../../components/QuoteForm";

const QuickQuote = props => {
  return (
    <QuickQuoteWrapper>
      <Header>Request Quote</Header>
      <QuoteForm />
    </QuickQuoteWrapper>
  );
};

QuickQuote.propTypes = {

};

export default QuickQuote;
