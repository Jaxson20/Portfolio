import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';  
import Portfolio from './components/Portfolio';  
import Contact from './components/Contact'; 
import Resume from './components/Resume';  
import Footer from './components/Footer';  
import Navigation from './components/Navigation';  

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
  <Route path="/AboutMe" element={<AboutMe />} />
  <Route path="/Portfolio" element={<Portfolio />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Resume" element={<Resume />} />
</Routes>


        <Footer />
      </div>
    </Router>
  );
};

export default App;


