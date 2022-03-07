// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Application from './application';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactForm from './components/contactForm/contactForm'
function App() {
  return (
    <div className="App"><Header/><br/><Application/><br/><ContactForm/><Footer/>
    </div>
  );
}

export default App;