import './App.css';
import React from 'react';
import Login from './components/Login';
import List from './components/List';
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
    
      <Routes>
        <Route path="/login" element={<Login />}/> 
        <Route path="/news"  element={<List/>}/>
      </Routes>
          
      <Footer/>
    </>
  );
}

export default App;
