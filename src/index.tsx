import React, { StrictMode }  from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

