import React from 'react';
import './App.css';

import {Route, Link} from 'react-router-dom'

import Index from './components/Index'
import Course from './components/Course'
import About from './components/About'
import Details from './components/Details'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Link to="/">首页</Link>
      <Link to="/course">课程</Link>
      {/* <Link to="/about">关于我们</Link> */}

      <Link to={{
        pathname: '/about',
        search: '?id=8&channel=999',
        hash: '#123'
      }}>关于我们</Link>
      <Link to="/nav">导航</Link>
      
      <Route path="/" exact component={Index}></Route>
      <Route path="/course" component={Course}></Route>
      <Route path="/course/:id" component={Details}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/nav" component={Nav}></Route>
    </div>
  );
}

export default App;
