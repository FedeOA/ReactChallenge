import './App.css';
import React from 'react';
import Login from './components/Login';
import List from './components/List';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';


function App() {
  return (
    <>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path="/news"  element={<List/>}/>
          </Routes>
    </>  
  );
}

export default App;
