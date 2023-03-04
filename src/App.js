import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import Layout from './layout';
import Ask from './pages/Ask';

function App() {
  return (
    <div className="App">
        <Layout >
         <Routes>
       
           <Route exact path="/"  element={<LandingPage  />} />
           <Route exact path="/ask"  element={<Ask  />} />
          </Routes>
          </Layout>
     </div>
  );
}

export default App;
