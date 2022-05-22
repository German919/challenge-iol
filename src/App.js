import React from 'react';
import  styles from './App.module.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';

function App() {

  return (
    <Router>

      <div className={styles.container}>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/details/:id' element={ <Details /> } />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
