import React, { Component } from 'react';
import { connect } from 'react-redux'

class RemoveNumero extends Component {

  decrementar = () => {
    this.props.dispatch({ type: 'DECREMENTAR' })
  }

  render() {
    return (
      <button onClick={this.decrementar}>Remove Número --</button>
    );
  }
}

export default connect()(RemoveNumero)