import React from 'react';
import Card from './Card';
import './Cards.css';


export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div class='cards'>
        {cities.map((c,index) => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={index}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
