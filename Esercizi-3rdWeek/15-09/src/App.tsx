import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExpandedArticle from './components/ExpandedArticle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<div><Navbar /><LandingPage/><Footer/></div>}/>
          {/* <Route path="/" element={} />
          <Route path="/" element={}  /> */}
          <Route path="/expanded:articleId" element={<div><Navbar /><ExpandedArticle/><Footer/></div>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
