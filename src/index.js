import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Operations } from './components/localstore/Context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Operations>
      <App />
    </Operations>
  </React.StrictMode>
);


