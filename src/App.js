import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './componentes/Login.js';
import Home from './componentes/Home.js';
import Header from './componentes/Header.js';
import Footer from './componentes/Footer';
import About from './componentes/About.js';
import Skills from './componentes/Skills.js';
import Contact from './componentes/Contact.js';
import './App.css';
import ChangesThemes from './componentes/ChangeThemes.js';


function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="App">
      {user.length === 0 || pass.length === 0 ? (
        <Login setUser={setUser} setPass={setPass} />
      ) : (
        <div>
         
          <Header />
          <Routes>
            <Route index element={ <Home /> } />
            <Route path="/Home" element={ <Home /> } />
            <Route path="/About" element={ <About /> } />
            <Route path="/Skills" element={ <Skills /> } />
            <Route path="/Contact" element={ <Contact /> } />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

