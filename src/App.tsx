import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import { ContainerWrapper } from './container';
import Home from './pages/Home';
import RegisterPage from './pages/Register';

function App() {
  return (
    <div className="App">
      <ContainerWrapper>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </ContainerWrapper>
    </div>
  );
}

export default App;
