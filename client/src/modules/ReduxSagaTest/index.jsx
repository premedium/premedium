import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reduxSagaTestAction from './action';

class ReduxSagaTest extends Component{


  handleClick = () => {
    console.log('reduxsaga test');
    // eslint-disable-next-line no-shadow,react/prop-types
    const { reduxSagaTestAction } = this.props;
    reduxSagaTestAction();
  };

  render() {
    console.log('this props test redux', this.props);
    return(
      // eslint-disable-next-line react/button-has-type
      <button onClick={this.handleClick}>ReduxSagaTest</button>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  reduxSagaTestAction,
}, dispatch);

const mapStateToProps = state => ({
  data: state.reduxSagaTestReducer.data
});

export default connect(mapStateToProps, mapDispatchToProps) (ReduxSagaTest);
