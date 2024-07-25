import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import { Contact } from './components/Contact';
import Work from './components/Work';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App>
      <Routes>
        <Route Component={Home} path='/' />
        <Route Component={About} path='/about' />
        <Route Component={Music} path='/music' />
        <Route Component={Contact} path='/contact' />
        <Route Component={Work} path='/work' />
      </Routes>
    </App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
