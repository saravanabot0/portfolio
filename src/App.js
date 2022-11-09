import React from 'react';
import './App.css';
import Content from './pages/content';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Blogs from './pages/blogs';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      {/* <Content/> */}
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/blog" element={<Blogs />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
