import React, { Component } from 'react';
import IncomeCategoriesDataService from '../services/income-categories.service';
import { Link } from 'react-router-dom';
import AddCategories from './AddCategories';


export default class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCategories = this.retrieveCategories.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.removeAllCategories = this.removeAllCategories.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      categories: [],
      currentCategory: null,
      currentIndex: -1,
      searchName: '',
    };
  }

  componentDidMount() {
    this.retrieveCategories();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });
  }

  retrieveCategories() {
    IncomeCategoriesDataService.getAll()
      .then((response) => {
        this.setState({
          categories: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCategories();
    this.setState({
      currentCategory: null,
      currentIndex: -1,
    });
  }

  setActiveCategory(category, index) {
    this.setState({
      currentCategory: category,
      currentIndex: index,
    });
  }

  removeAllCategories() {
    IncomeCategoriesDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchName() {
    IncomeCategoriesDataService.findByTitle(this.state.searchName)
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchName, categories, currentCategory, currentIndex } =
      this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <AddCategories />
          <br />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <h4>Categories List</h4>

          <ul className="list-group">
            {categories &&
              categories.map((category, index) => (
                <li
                  className={
                    'list-group-item ' +
                    (index === currentIndex ? 'active' : '')
                  }
                  onClick={() => this.setActiveCategory(category, index)}
                  key={index}
                >
                  {category.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllCategories}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentCategory ? (
            <div>
              <h4>Category</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{' '}
                {currentCategory.name}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{' '}
                {currentCategory.published ? 'Published' : 'Pending'}
              </div>

              <Link
                to={'/income-categories/' + currentCategory.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
                <p>Please click on a Category...</p>
            </div>
          )}
        </div>
      </div>
    );
  };
};
