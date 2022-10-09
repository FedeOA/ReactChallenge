import './App.css';
import React from 'react';
import Login from './components/Login';
import List from './components/List';
import { Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import DetailNew from './components/DetailNew';


function App() {
  return (
    <>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path="/news"  element={<List/>}/>
            <Route path="/detalle" element={<DetailNew/>}></Route>
          </Routes>
    </>  
  );
}

export default App;
