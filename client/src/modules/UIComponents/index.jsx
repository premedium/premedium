import React, { Component } from 'react';
import axios from 'axios';

class TestRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {

    axios
      .post('/testapi')
      .then(function(response) {
        console.log('response', response);
      })
      .catch(function(error) {
        console.log(error);
      });
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    this.setState({ clicked: !this.state.clicked });
  };

  handleClickSecond = () => {
    axios
      .post('/api/test')
      .then(function(response) {
        console.log('response', response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Send Request
        </button>
        <button type="button" onClick={this.handleClickSecond}>
          Send Second Request
        </button>
      </div>
    );
  }
}

export default TestRequest;
