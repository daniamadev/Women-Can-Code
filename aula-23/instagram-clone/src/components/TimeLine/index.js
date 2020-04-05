import React, { Component } from "react";
import { FiHeart } from "react-icons/fi";
import axios from "axios";
import Helmet from "react-helmet";

//primeiro arquivo a ser trabalhado

//export default function TimeLine() {
class Timeline extends Component {
  state = {
    conteudo: [],
  };
  //tem que ser uma array[]
  //nao um objeto {}

  componentDidMount = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      this.setState({ conteudo: res.data });
    });
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Timeline</title>
        </Helmet>
        <div className="post">
          {this.state.conteudo.map((content) => (
            <div key={content.id}>
              <header>
                <img src={content.userPicture} alt="Lala" />
                <div className="post-user">
                  <strong>{content.user}</strong>
                  <span>{content.location}</span>
                </div>
              </header>
              <div className="post-image">
                <img src={content.postPicture} alt="daniela" />
              </div>
              <div className="post-likes">
                <FiHeart />
              </div>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Timeline;
