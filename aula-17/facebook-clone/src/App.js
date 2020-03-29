import React, { Component } from 'react';
import Header from './Components/Header/header';
import PostList from './Components/PostList/postList';
import './style.css';

function App() {
  return (
    // é preciso por uma tag
    //vazia para comportar dois componentes
    <>
    <Header/>
    <PostList/>
    </>
  );
}

export default App;
