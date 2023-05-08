import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route, Link} from 'react-router-dom';
 

import App from './App';
import TestInterface from './TestInterface';
import LoadingBeforeStarting from './LoadingBeforeStarting'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>  
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/TestInterface" element={<TestInterface />}/>
    <Route path="/LoadingBeforeStarting" element={<LoadingBeforeStarting />}/>
  </Routes>
  </BrowserRouter>
);
