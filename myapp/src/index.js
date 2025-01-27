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
 import Forms from "./forms.js";
 import Lazy from "./depth.js";
import Reference from './ref.js';
import MainPortal from './createPortal.js';
import StateReducer from './reducer.js';
import { Provider } from 'react-redux';
import store from './store.js';
import Counter from './redux.js';
import Calculator from './calculator.js';
import Hooks from './hooks.js';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <MyApp />
    {/* <LoginPage /> */}
    {/* <UseStates />
    <Tictactoe />
    <List />
    <Props />
    <Forms />
    <Lazy />
    <Reference/>
    <MainPortal/>
    <StateReducer/> */}
    {/* <Hooks/> */}
    <Provider store={store}>
    <Counter/>
    </Provider>

    <Calculator/>
    </>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
