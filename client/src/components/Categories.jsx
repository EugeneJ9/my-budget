import React, { Component } from 'react';
import IncomeCategoriesDataService from '../services/income-categories.service';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.newCategory = this.newCategory.bind(this);

    this.state = {
      name: '',
      description: '',

      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveCategory() {
    const data = {
      name: this.state.name,
      description: this.state.description,
    };

    IncomeCategoriesDataService.create(data)
      .then((response) => {
        this.setState({
          name: response.data.name,
          description: response.data.description,

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
      description: '',
      
      submitted: false,
    });
  }

  render() {
    return (
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
              <label htmlFor='name'>New name</label>
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

            <div className='form-group'>
              <label htmlFor="description">Description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name='description'
              />
            </div>

            <button onClick={this.saveCategory} className='btn btn-success'>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
