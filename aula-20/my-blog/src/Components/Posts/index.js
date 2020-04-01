import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        titulo: '',
        conteudo: '',
        id: 1
    }

    buscaPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
        .then(res => {
            console.log(res);
            this.setState({ titulo: res.data.title, 
               conteudo: res.data.body, 
               id: res.data.id });

        });
    }

    componentDidMount = () => {
        this.buscaPost();
        //por estar em uma classe, utiliza-se o this
    }

    novoPost = () => {
        this.setState({id: this.state.id+1})
        //nao deve usar ++
        console.log("clicou");
        this.buscaPost();
    }
    render() {
        return(
            <article>
                <h1>{this.state.titulo}</h1>
                <p>{this.state.conteudo}</p>
                <button onClick={this.novoPost}>Ver próximo post</button>
            </article>
        );
    }

}

export default Posts;