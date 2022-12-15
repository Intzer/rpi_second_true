import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import List from './Pages/List'
import Person from './Pages/Person';
import './i18n'
import initialDetails from './Data/initialDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/list" element={< List />} />
        <Route path={initialDetails[0].info.url} element={< Person data = {initialDetails[0]} />} />
        <Route path={initialDetails[1].info.url} element={< Person data = {initialDetails[1]} />} />
        <Route path={initialDetails[2].info.url} element={< Person data = {initialDetails[2]} />} />
        <Route path={initialDetails[3].info.url} element={< Person data = {initialDetails[3]} />} />
        <Route path={initialDetails[4].info.url} element={< Person data = {initialDetails[4]} />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
