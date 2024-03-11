import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import { ContainerWrapper } from './container';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ContainerWrapper>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ContainerWrapper>
    </div>
  );
}

export default App;
