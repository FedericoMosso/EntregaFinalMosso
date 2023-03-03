import React, { useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

const fiambre = [
    { id:1, image: "https://lujan365.com.ar/download/multimedia.normal.805c6176062aeb4d.4a616d6f6e437275646f5f6e6f726d616c2e6a7067.jpg", title: "Jamón Crudo"},
    { id: 2, image:"https://i.ytimg.com/vi/ShJ7-HRHCeQ/maxresdefault.jpg", category: 'fiambre', title: "Bondiola"},
    { id: 3, image: "https://2trendies.com/hero/2023/01/Berenjenas-en-escabeche.jpg?width=768&aspect_ratio=16:9&format=nowebp", category: 'escabeche', title: "Berenjena"},
    { id: 4, image: "https://www.revistachacra.com.ar/files/image/35/35073/5e2ef690ab571.jpg", category: 'escabeche', title: "Ciervo"},
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState ({});
  const { detalleId } = useParams();

    useEffect (() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(fiambre);
        }, 3000);
      });

      getData.then(res => setData(res.find(fiambre => fiambre.id === parseInt(detalleId))));
    }, [])

  return (
    <ItemDetail data= {data}/>
  );
}

export default ItemDetailContainer;
