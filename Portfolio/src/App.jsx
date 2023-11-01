// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import Navigation from './components/navigation'; // Import the Navigation component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation /> {/* Use the Navigation component */}
        <Route path="/about-me" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

