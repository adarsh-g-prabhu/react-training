import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App.js';
// import LoginPage from './Login.js';
import UseStates  from './useState.js';
import Tictactoe from "./tictactoe.js"
import List from "./list.js"
import Props from "./props.js"
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <MyApp />
    {/* <LoginPage /> */}
    <UseStates />
    <Tictactoe />
    <List />
    <Props />
    </>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
