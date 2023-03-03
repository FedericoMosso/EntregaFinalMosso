
import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) => {
  return (
    data.map(fiambre => <Item key={fiambre.id} info={fiambre} />)
  );
}

export default ItemList;
