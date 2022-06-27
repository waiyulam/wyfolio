import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre"
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import Project from "./components/project/Project"
import Error from "./components/error/Error"
import {
  BrowserRouter as Router, 
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './style.css'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load,upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll":"scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/edu' element={<Education />} />
          <Route path='/project' element={<Project />} />
          <Route path='/resume' element={<Error />} />
          <Route path='/blog' element={<Error />} />
          <Route path='*' element={<Navigate to="/"/> } />
        </Routes >
        <Footer />
      </div>
    </Router>
  );
}

export default App;
