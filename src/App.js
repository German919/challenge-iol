import React from 'react';
import  styles from './App.module.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import UserState from './context/user/UserState';
import Favorites from './components/favorites/Favorites';

function App() {

  return (
    <UserState>
      <Router>

        <div className={styles.container}>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/details/:id' element={ <Details /> } />
            <Route path='/favorites' element={ <Favorites /> } />
          </Routes>
        </div>
        
      </Router>
    </UserState>
  );
}

export default App;
