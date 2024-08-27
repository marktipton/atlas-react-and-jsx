import "./index.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import { Greeting } from "./components/Greeting";
// import { SocialLinks } from "./components/SocialLinks";

// Render the App component to the root element
 const root =  createRoot(document.getElementById('root'));

 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
