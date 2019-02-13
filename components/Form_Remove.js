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
        <button type="submit">삭제하기</button>
      </form>
    );
  }
}


export default Form_Remove
