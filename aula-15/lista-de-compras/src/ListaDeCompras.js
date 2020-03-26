import React from 'react';
import Item from './Item';

function ListaDeCompras() {
  return (
    <div className="ListaDeCompras">
        <Item nome="feijao"/>

        <Item nome="arroz"/>

        <Item nome="sabonete"/>

        <Item nome="milho"/>

        <Item nome="tomate"/>
    </div>
  );
}

export default ListaDeCompras;
