import React, { Component } from 'react';
import IncomeCategoriesDataService from '../services/income-categories.service';

export default class AddCategories extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.newCategory = this.newCategory.bind(this);

    this.state = {
      name: '',
      published: false,
      
      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }


  saveCategory() {
    const data = {
      name: this.state.name,
    };

    IncomeCategoriesDataService.create(data)
      .then((response) => {
        this.setState({
          name: response.data.name,

          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newCategory() {
    this.setState({
      id: null,
      name: '',
      
      submitted: false,
    });
  }

  render() {
    return (
      <div className='col-md-6'>
      <div className='submit-form'>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className='btn btn-success' onClick={this.newCategory}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className='form-group'>
              <label htmlFor='name'>New category name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name='name'
              />
            </div>

            <button onClick={this.saveCategory} className='btn btn-success'>
              Submit
            </button>
          </div>
        )}
      </div>
      </div>
    );
  };
};
