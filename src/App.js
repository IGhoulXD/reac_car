import React, { useState, useEffect } from 'react';
import './style.css';
import Car from './car/Car.js';

export default function App() {
  //Esta es una variable que representaría al arreglo de objetos JSON que se podrían recuperar desde una API Rest.
  const personajesDesdeAPI = [
    {
      nombre: 'deportivo',
      modelo: '2011 BMW Concept Car 3',
      imagen: 'https://www.hdcarwallpapers.com/thumbs/2011/2011_bmw_concept_car_3-t2.jpg',
      descripcion: 'un super deportivo',
      sonido: 'clason',
      anio: '2006',
    },
    {
      nombre: 'electrico',
      modelo: 'Tesla Roadster Sport',
      imagen:
        'https://www.hdcarwallpapers.com/thumbs/2010/tesla_roadster_sport-t2.jpg',
      descripcion: 'El Compañero fiel del auto veloz de la pelicula Cars.',
      sonido: 'BEEP BEEP ',
      anio: '2022',
    },
  ];

  //variable de estado que nos permitirá almacenar a los personajes a pintar (renderizar).
  const [personajes, setPersonajes] = useState([]);

  //Un useEffect con dependencia de arreglo vacío [], siempre se dispara una vez al iniciar el componente.
  useEffect(() => {
    //TODO: Aquí iria la petición a la API utilizando FETCH y se asignaría la respuesta de la API a la variable personajesDesdeAPI, algo como esto:
    // personajesDesdeAPI = fetch("http://personajesdecars.com/all")
    
    //Se actualiza la variable de estado 'personajes' con los datos recuperados.
    setPersonajes(personajesDesdeAPI);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        //dibujar por cada personaje en la lista de personajes un componente Car.
        personajes.map((personaje) => (
          <Car
            nombre={personaje.nombre}
            modelo={personaje.modelo}
            imagen={personaje.imagen}
            descripcion={personaje.descripcion}
            sonido={personaje.sonido}
            anio={personaje.anio}
          />
        ))
      }
    </div>
  );
}
