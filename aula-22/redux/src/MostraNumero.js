import React from 'react';
import { connect } from 'react-redux';

class MostraNumero extends React.Component {

  render() {
    return (
      <div>
        <h2>Mostra Número</h2>
        <div>
          <span>{this.props.contador}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contador: state.count
  };
}

export default connect(mapStateToProps)(MostraNumero);
