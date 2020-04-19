import React from 'react';
import {Header, QuickQuoteWrapper} from "./style";
import QuoteFormContainer from "../../containers/QuoteFormContainer";
import {Switch, Route, Redirect} from "react-router-dom";
import QuoteResultContainer from "../../containers/QuoteResultContainer";

const QuickQuote = () =>
  <QuickQuoteWrapper>
    <Header>Request Quote</Header>
    <Switch>
      <Route exact path={`/:from/:to/:amount`}
             render={({match: {params: {from, to, amount}}}) =>
               <QuoteResultContainer from={from} to={to} amount={amount}/>
             }/>
      <Route exact path="/" component={QuoteFormContainer}/>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </QuickQuoteWrapper>;

export default QuickQuote;
