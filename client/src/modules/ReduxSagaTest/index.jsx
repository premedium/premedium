import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import reduxSagaTestAction from './action';


class ReduxSagaTest extends Component {
  handleClick = () => {
    // eslint-disable-next-line no-shadow,react/prop-types
    const { reduxSagaTestAction } = this.props;
    reduxSagaTestAction();
  };

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        ReduxSagaTest
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      reduxSagaTestAction
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  data: state.reduxSagaTestReducer.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxSagaTest);
