import React from 'react';
import ReactDOM from 'react-dom/client';
// import {  Router } from 'react-router-dom';
import App from './Component/App'; // Adjust the import path if necessary
import './Style/main.css'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App />
 
  </React.StrictMode>
);
