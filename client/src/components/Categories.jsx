import React, { Component } from 'react';
// import CategoriesDataService from 

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveCategorie = this.saveCategorie.bind(this);
    this.newCategorie = this.newCategorie.bind(this);

    this.state = {
      id: null,
      title: '',
      description: '',
      published: false,

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

    saveCategorie() {
    const data = {
      name: this.state.name,
      description: this.state.description,
    };

    CategoriesDataService.create(data)
      console.log("🚀 ~ file: Categories.jsx ~ line 41 ~ Categories ~ saveCategorie ~ data", data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newCategorie() {
    this.setState({
      id: null,
      title: '',
      description: '',
      published: false,
      
      submitted: false,
    });
  }

  render() {
    return (
      <div className='submit-form'>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className='btn btn-success' onClick={this.newCategorie}>
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

            <button onClick={this.saveCategorie} className='btn btn-success'>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
