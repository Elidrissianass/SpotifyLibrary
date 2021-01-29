import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./assets/Global.style";
import { BrowserRouter } from 'react-router-dom';
import Router from "./router";
import AuthProvider from './context/AuthProvider';


const App = () => {

  return (
  <>
  <GlobalStyle />
  <BrowserRouter>
  <AuthProvider>
  <Router/>
  </AuthProvider>
  </BrowserRouter>
  </>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'));