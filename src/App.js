import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.theme.scss';
import {AppWrapper} from "./App.style";
import {Alert} from "react-bootstrap";
import QuickQuote from "./containers/QuickQuote";
import QuoteResult from "./components/QuoteResult";
import {dummyResult} from "./utils/dummy/SpotRateResult";

const App = () => {

  return (
    <AppWrapper>
      {
        !process.env.REACT_APP_API_URL &&
        <Alert variant={"primary"}>
          Environment Variable `REACT_APP_API_URL` Missing!
        </Alert>
      }
      <BrowserRouter>
        <Switch>
          <Route exact path={`/:from/:to/:amount`}
                 render={({match: {params: {from, to, amount}}}) =>
                   <QuoteResult from={from} to={to} amount={amount} result={dummyResult}/>
                 }/>
          <Route exact path="/" render={() => <QuickQuote />}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
