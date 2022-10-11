import './App.css';
import React from 'react';
import Login from './components/Login';
import List from './components/List';
import Resultado from './components/Resultado';
import Contact from './components/Contact';
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path="/news"  element={<List/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/results" element={<Resultado/>}></Route>
          </Routes>
    </>  
  );
}

export default App;
