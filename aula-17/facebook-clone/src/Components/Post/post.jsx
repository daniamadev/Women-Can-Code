//componente de função, não vai ter estado
//sem importar componente, também não se usa render
//esse componente é filho do postlist, por isso
//usamos props

import React from 'react';
import Comment from '../Comments/comments';

function Post(props) {
    const { name, avatar } = props.conteudo.author;
    const { comments } = props.conteudo;
    return (
        <div className="post-item">
            <div className="meta">
                <div className="avatar">
                    <img src={avatar} alt="Avatar"/>
                </div>
                <div className="dados">
                    <h2>{name}</h2>
                    <span>{props.conteudo.date}</span>
                </div>
            </div>
            <div className="post-content">
                {props.conteudo.content}
            </div>

            {comments.map(comment => (
                <Comment conteudo={comment} key={comment.id}/>
            ))
            }
        </div>
    )


}

export default Post;