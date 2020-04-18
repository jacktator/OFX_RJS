import React from 'react';
import './App.theme.scss';
import {AppWrapper} from "./App.style";
import {Alert} from "react-bootstrap";
import QuickQuote from "./containers/QuickQuote";

const App = () => {

  return (
    <AppWrapper>
      {
        !process.env.REACT_APP_API_URL &&
        <Alert variant={"primary"}>
          Environment Variable `REACT_APP_API_URL` Missing!
        </Alert>
      }
      <QuickQuote/>
    </AppWrapper>
  );
};

export default App;
