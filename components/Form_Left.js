import React, { Component } from 'react';
import axios from 'axios';

const Form_Style = {
  marginLeft : '10px',
  paddingBottom : '100px',
}

class Form_Left extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;

    axios.post('http://localhost:5000/add', { title, description })
  .then((result) => {
  });
  }

  render() {
    const { title, description } = this.state;

    return (
      <form style={Form_Style} onSubmit={this.onSubmit}>
        <div>
          계획 : <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange.bind(this)}
          />
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default Form_Left
