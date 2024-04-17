import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Pc from './comp/Pc.jsx';
const isDesktop = window.innerWidth > window.innerHeight;

ReactDOM.createRoot(document.getElementById('root')).render(
  isDesktop ? <Pc/>: (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
);
