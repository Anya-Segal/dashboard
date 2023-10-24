import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
