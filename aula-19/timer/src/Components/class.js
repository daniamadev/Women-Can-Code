import React, { Component } from 'react';

class Classe extends Component {
    constructor() {
        super();
        this.state = { time: new Date() };
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000);
        //nao entendi porque tem essa multiplicação
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate - anterior", prevState.time);
        console.log("compoonentDidUpdate - atual", this.state.time);
    }

    componentWillUnmount = () => {
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state;
        return(
            <div>
                <h1>Relóginho bonitinho</h1>
                <h2>{time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Classe;