import React from 'react';

function Comment(props) {
    const { avatar, name } = props.conteudo.author;
    return(
        <div className="commment">
        <div className="comment-avatar">
            <img src={avatar} alt="Avatar"/>
        </div>
        <div className="comment-inner">
            <h2>{name}</h2>
            {props.conteudo.content}
        </div>
        </div>
    )
}

export default Comment;