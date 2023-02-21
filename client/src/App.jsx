import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';
import TutorialsList from './components/TutorialsList';
import AddCategories from './components/AddCategories';
import AddIncome from './components/AddIncome';
import CategoriesList from './components/CategoriesList';
import AddExpense from './components/AddExpense';

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
                Add tutorial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link">
                Сategories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-categories" className="nav-link">
                Add categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-income" className="nav-link">
                Add income
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-expense" className="nav-link">
                Add expense
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TutorialsList />} />
            <Route path="/tutorials" element={<TutorialsList />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/add-categories" element={<AddCategories />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
            <Route path='/add-income' element={<AddIncome />} />
            <Route path='/add-expense' element={<AddExpense />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
