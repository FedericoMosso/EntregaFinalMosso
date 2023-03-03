import React, {useEffect, useState} from 'react';

import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const fiambre = [
    { id: 1, image:"https://lujan365.com.ar/download/multimedia.normal.805c6176062aeb4d.4a616d6f6e437275646f5f6e6f726d616c2e6a7067.jpg",category: 'fiambre' ,title: "Jamón Crudo"},
    { id: 2, image:"https://i.ytimg.com/vi/ShJ7-HRHCeQ/maxresdefault.jpg", category: 'fiambre', title: "Bondiola"},
    { id: 3, image: "https://2trendies.com/hero/2023/01/Berenjenas-en-escabeche.jpg?width=768&aspect_ratio=16:9&format=nowebp", category: 'escabeche', title: "Berenjena"},
    { id: 4, image: "https://www.revistachacra.com.ar/files/image/35/35073/5e2ef690ab571.jpg", category: 'escabeche', title: "Ciervo"},
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams ();

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(fiambre);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(fiambre => fiambre.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])
  
    return (
    <>
        <Title greeting= {texto} />
        <ItemList data ={data}/>
    </>
  );
}

export default ItemListContainer;