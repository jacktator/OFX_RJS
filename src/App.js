import React from 'react';
import './App.theme.scss';
import logo from './logo.svg';
import {AppWrapper} from "./App.style";
import {Alert} from "react-bootstrap";

const App = () => {

  return (
    <AppWrapper>
      {
        !process.env.REACT_APP_API_URL &&
        <Alert variant={"primary"}>
          Environment Variable `REACT_APP_API_URL` Missing!
        </Alert>
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  );
};

export default App;
