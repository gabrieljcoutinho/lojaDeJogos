import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Certifique-se de que App está importado

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);