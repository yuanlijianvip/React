import React from 'react';
import ReactDOM from 'react-dom';
//all in js
import TodoList from './TodoList'
//PWA  progressive web application
//https协议的服务器上
import * as serviceWorker from './serviceWorker';
//JSX
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
