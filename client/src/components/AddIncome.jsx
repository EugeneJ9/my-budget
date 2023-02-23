import React, { Component } from "react";
import Select from 'react-select';
import AddIncomeDataService from '../services/add-income.services';

const categories = ['Salary', 'Sale', 'Gift', 'Other'];

const techCompanies = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

const selectCurrency = [
  { label: "UAH", value: 1 },
  { label: "USD", value: 2 },
  { label: "EUR", value: 3 },
];

export default class AddIncome extends Component {
  constructor(props) {
    super(props);
    this.onChangeIncomeValue = this.onChangeIncomeValue.bind(this);
    this.onChangeIncomeCategory = this.onChangeIncomeCategory.bind(this);
    this.saveIncome = this.saveIncome.bind(this);
    this.onChangeIncomeName = this.onChangeIncomeName.bind(this);
    this.onChangeIncomeDate = this.onChangeIncomeDate.bind(this);
    this.onChangeIncomeCurrency = this.onChangeIncomeCurrency.bind(this);

    AddIncomeDataService.getAll().then(response => console.log(response));


    this.state = {
      date: '',
      value: '',
      currency: '',
      categoryId: '',
      name: '',
      published: false,

      submitted: false,
    };
  };

  onChangeIncomeDate(e) {
    this.setState({
      date: e.target.value, 
    });
  };

  onChangeIncomeValue(e) {
    this.setState({
      value: e.target.value, 
    });
  };

  onChangeIncomeCurrency(e) {
    this.setState({
      currency: e.target.value,
    });
  };

  onChangeIncomeCategory(e) {
    this.setState({
      categoryId: e.target.value,
    });
  };

  onChangeIncomeName(e) {
    this.setState({
      name: e.target.value,
    });
  };
  
  saveIncome() {
    const data = {
      date: this.state.date,
      value: this.state.value,
      currency: this.state.currency,
      categoryId: this.state.categoryId,
      name: this.state.name,
    };

    AddIncomeDataService.create(data)
    .then((response) => {
      this.setState({
        date: response.data.date,
        value: response.data.value,
        currency: response.data.currency,
        categoryId: response.data.categoryId,
        name: response.data.name,
        published: response.data.published,

        submitted: true,
      });
    })
    .catch((e) => {
      console.log(e);
    });
  };

  newIncome() {
    this.setState({
      date: '',
      value: '',
      currency: '',
      categoryId: '',
      name: '',
      published: false,

      submitted: false,
    });
  }
    
  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfuly!</h4>
              <button className="btn btn-success" onClick={this.newIncome}>
                Add income
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor='date'>Date</label>
                <input
                  type='date'
                  className="form-control"
                  id='date'
                  required
                  value={this.state.date}
                  onChange={this.onChangeIncomeDate}
                  name='date'
                />
              </div>

              <div className="form-group">
                <label htmlFor='income_ammount'>Enter ammount</label>
                <input
                  type='number'
                  className="form-control"
                  id='value'
                  required
                  value={this.state.value}
                  onChange={this.onChangeIncomeValue}
                  name="value"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor='currency'>Currency</label>
                <Select options={ selectCurrency } onChange={this.onChangeIncomeCurrency} />   
              </div>

              <div className="form-group">
                <label htmlFor='category'>Category</label>              
                <Select options={ categories.map((element) => ({ value: element, label: element})) } onChange={this.onChangeIncomeCategory} />                       
              </div>

              <div className="form-group">
                <label htmlFor='income_name'>Name</label>
                <input
                  type='text'
                  className="form-control"
                  id='name'
                  required
                  value={this.state.name}
                  onChange={this.onChangeIncomeName}
                  name="name"
                />
              </div>

              <button onClick={this.saveIncome} className="btn btn-success">
                Submit
              </button>

            </div>
          )}
        </div>
    );
  };
};
