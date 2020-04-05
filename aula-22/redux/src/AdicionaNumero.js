import React, { Component } from 'react';
import { connect } from 'react-redux'

class Contador2 extends Component {

  incrementar = () => {
    this.props.dispatch({ type: 'INCREMENTAR' })
  }

  render() {
    return (
      <button onClick={this.incrementar}>Incrementar também ++</button>
    );
  }
}

export default connect()(Contador2)
