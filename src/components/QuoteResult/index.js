import React from 'react';
import PropTypes from 'prop-types';
import {QuoteResultWrapper, HeaderSection, AmountSection, CustomerAmount, ButtonSection} from "./style";
import SpotRateResult from "../../constants/SpotRateResult";
import {Badge, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CustomerRate} from "../CustomerRate/style";

const QuoteResult = ({loading, from, to, amount, result, onReset}) => {
  return (
    <QuoteResultWrapper>
      <HeaderSection>
        <h3>OFX Customer Rate</h3>
        <CustomerRate>
          {loading || !result ? "Loading..." : result.CustomerRate}
        </CustomerRate>
      </HeaderSection>
      <AmountSection>
        <h5>From</h5>
        <CustomerAmount>
          <Badge variant="primary">{from}</Badge> {amount}
        </CustomerAmount>
        <p>When you transfer {amount} {from}</p>
      </AmountSection>
      <AmountSection>
        <h5>To</h5>
        <CustomerAmount>
          <Badge variant="secondary">{to}</Badge> {loading || !result ? "Loading..." : result.CustomerAmount}
        </CustomerAmount>
        <p>You'll receive {loading || !result ? "Loading..." : result.CustomerAmount} {to}</p>
      </AmountSection>
      <ButtonSection className={"text-center"}>
        <Button variant="primary"
                disabled={loading}
                size="lg"
                as={Link}
                to={"/"}
                onClick={onReset}>
          {loading ? 'Loading...' : 'New Quote'}
        </Button>
      </ButtonSection>
    </QuoteResultWrapper>
  );
};

QuoteResult.propTypes = {
  loading: PropTypes.bool.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  result: SpotRateResult,
  onReset: PropTypes.func.isRequired
};

export default QuoteResult;
