import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import About from './components/about';
import Courses from './components/courses';
import Tab1 from './components/tab1';
import Tab2 from './components/tab2';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/home' element={<Navigate replace to="/" />}/>
      <Route path='/about' element={<About /> }/>
      <Route path='/courses' element={<Courses /> }/>
        <Route path='tab1' element={<Tab1 /> }/>
        <Route path='tab2' element={<Tab2 /> }> 
      </Route>
      <Route path='/' element={<Home />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);