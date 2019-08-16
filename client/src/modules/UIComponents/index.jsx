import React, { Component } from 'react';
import axios from 'axios';

class TestRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    console.log(this.state.clicked);
    axios
      .post('/testapi')
      .then(function(response) {
        console.log('response', response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Send Request
        </button>
      </div>
    );
  }
}

export default TestRequest;
