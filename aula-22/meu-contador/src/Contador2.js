import React, { Component } from 'react';
import { connect } from 'react-redux'

class Contador2 extends Component {

    incrementar = () => {
        this.props.dispatch({ type: 'INCREMENT' })

    }
     render(){
        return(
            <button onClick={this.incrementar}>Incrementar</button>
        )
    }
}

export default connect()(Contador2); //se for usar redux
//tem que exportar embaixo pra poder usar o connect