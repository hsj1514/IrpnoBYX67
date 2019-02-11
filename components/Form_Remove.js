import React, { Component } from 'react';
import axios from 'axios';


const Form_Style = {
  marginLeft : '10px',
  paddingBottom : '70px',
}


class Form_Remove extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      year: '',
      month: '',
      day: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, year, month, day } = this.state;

    axios.post('http://localhost:5000/add', { title, description, year, month, day })
  .then((result) => {
  });
  }

  render() {
    const { title, description, year, month, day } = this.state;

    return (
      <form style={Form_Style} onSubmit={this.onSubmit}>
        <div>
          계획 : <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange.bind(this)}
          required/>
        </div>
        <p></p>
        <div>
          계획 설명(생략가능) : <input
            type="text"
            name="description"
            value={description}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <p></p>
        <div>
          년도(ex. 2019) : <input
            type="number"
            name="year"
            value={year}
            onChange={this.onChange.bind(this)}
          required/>
        </div>
        <p></p>
        <div>
          월(ex. 8) : <input
            type="number"
            name="month"
            value={month}
            onChange={this.onChange.bind(this)}
          required/>
        </div>
        <p></p>
        <div>
          일(ex.6) : <input
            type="number"
            name="day"
            value={day}
            onChange={this.onChange.bind(this)}
          required/>
        </div>
        <p></p>
        <button type="submit">제출하기</button>
      </form>
    );
  }
}


export default Form_Remove
