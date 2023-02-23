import React from "react";
import { useState } from "react";
import Select from "react-select";

const selectCurrency = [
  { label: "UAH", value: 1 },
  { label: "USD", value: 2 },
  { label: "EUR", value: 3 },
];

const categories = ['Salary', 'Sale', 'Gift', 'Other'];

export default function AddExpense() {
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');
  const [published, setPublished] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const onChangeCategory = (event) => {
    setCategoryId(event.target.value);
  };

  const onChangeName = (event) => {
    setCategoryId(event.target.value);
  };

  const saveExpense = () => {
    setSubmitted(true);
    const data = {
      date,
      value,
      currency,
      categoryId,
      name,
    };
  };

  const newExpense = () => {
    setDate('');
    setValue('');
    setCurrency('');
    setCategoryId('');
    setName('');
    setPublished(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfuly!</h4>
          <button className="btn btn-success" onClick={newExpense}>
            Add expense
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type='date'
              className='form-control'
              id='date'
              required
              value={date}
              onChange={onChangeDate}
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
              value={value}
              onChange={onChangeValue}
              name="value"
            />
          </div>

          <div className="form-group">
            <label htmlFor='currency'>Currency</label>
            <Select options={selectCurrency} onChange={onChangeCurrency} />
          </div>

          <div className="form-group">
            <label htmlFor='category'>Category</label>
            <Select options={categories.map((element) => ({ value: element, label: element }))} onChange={onChangeCategory} />
          </div>

          <div className="form-group">
            <label htmlFor='income_name'>Name</label>
            <input
              type='text'
              className="form-control"
              id='name'
              required
              value={name}
              onChange={onChangeName}
              name="name"
            />
          </div>

          <button onClick={saveExpense} className='btn btn-success'>
            Submit
          </button>

        </div>
      )}
    </div>
  );
}
