import React from 'react';

function Item(props) {
  return (
    <div className="Item">
        <p>{props.nome}</p>
    </div>
  );
}

export default Item;
