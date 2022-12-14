import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';
import TutorialsList from './components/TutorialsList';
import Categories from './components/Categories';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/tutorials" className="navbar-brand">
            MyBudget
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/tutorials" className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TutorialsList />} />
            <Route path="/tutorials" element={<TutorialsList />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
