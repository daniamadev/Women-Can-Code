//componente de classe, pois terá o state (armazenamento)
//de conteúdo dinâmico
//as funcionalidades do react serão extendidas
//portanto é necessário importar o componente
//toda vez que for criado uma classe é necessário importar o Component
//porque é dele que vem o render() e o setState
//é tipo um stdio.h

import React, { Component } from 'react';
import Post from '../Post/post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rodrigo França',
          avatar: 'https://randomuser.me/api/portraits/men/58.jpg'
        },
        date: '05 Mar 2020',
        content: 'Data para novo curso?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Douglas Silva',
              avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            content: 'Ainda não foi definido.'
          },
          {
            id: 2,
            author: {
              name: 'Fernando Costa',
              avatar: 'https://randomuser.me/api/portraits/men/37.jpg'
            },
            content: 'Provavelmente em Agosto.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Bianca Rodrigues',
          avatar: 'https://randomuser.me/api/portraits/women/58.jpg'
        },
        date: '04 Mar 2020',
        content: 'Pessoal, alguém já usou React Native?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rafael Maia',
              avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
            },
            content: 'Sim! Recomendo bastante!'
          }
        ]
      }
    ]
  }

  render() {
      const { posts } = this.state;
    return (
        <div className="post-list">
            {
                posts.map(post => (
                    <Post key={post.id} conteudo={post}/>
                ))
            }
        </div>
    )
  }
}

export default PostList