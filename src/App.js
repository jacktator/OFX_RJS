import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.theme.scss';
import {AppWrapper} from "./App.style";
import {Alert} from "react-bootstrap";
import QuickQuote from "./components/QuickQuote";
import {StoreProvider} from "./store/store";

const App = () => renderAppWithProvider();

const renderAppWithProvider = () =>
  <BrowserRouter>
    <StoreProvider>
      {
        renderApp()
      }
    </StoreProvider>
  </BrowserRouter>;

const renderApp = () =>
  <AppWrapper>
    {
      !process.env.REACT_APP_API_URL &&
      <Alert variant={"primary"}>
        Environment Variable `REACT_APP_API_URL` Missing!
      </Alert>
    }
    <QuickQuote />
  </AppWrapper>;


export default App;
