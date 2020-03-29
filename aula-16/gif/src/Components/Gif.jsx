import React, { Component } from 'react';
class Gif extends Component {

    state = { //objeto atualizado no componente, dinamico
        //state é responsável por armazenar conteúdo dinâmico
        setaGif: false
    }
    escondeGif = () => {
        this.setState({setaGif: false})

    }

    mostraGif = () => {
        this.setState({setaGif: true})
        //setState vem junto com o extends Component

    }
    render() {
        return (
            <div>

            <button onClick={this.mostraGif}>Hide/Show Gif</button>
            {this.state.setaGif === true && <img src="https://2.bp.blogspot.com/-9e9s73AI-pc/Ua8sa_wlqnI/AAAAAAAAjTM/gQi8HZAXFIg/s1600/funny-cat-gifs-053-007.gif" alt="Gif" />
            }
            {/* se setaGif é verdadeiro, então seta image da tag <img> */}
            </div>
        )
    }
}

export default Gif;