import React, { useState, useEffect } from 'react';
import './Car.css';

export default function Car(props) {
  const [beepeando, setBeppeando] = useState(false);

  useEffect(() => {
    console.log('Se va a guardar a Base de Datos');
    //Código necesario para guardar en base de datos
    console.log('Bepeando se guardo en Base de Datos');
  }, [beepeando]);

  //Style from: https://www.w3schools.com/howto/howto_css_cards.asp

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  const hacerBeep = (sonido) => {
    setBeppeando(!beepeando);

    //console.log(sonido);
    /*if (props.modelo.includes('C6')) {
      alert('Ku-Chaw');
    } else if (props.modelo.includes('170')) {
      alert('BEEP BEEP Mate Tom-mate');
    }*/
  };

  return (
    <div style={props.style}>
      {beepeando && <div className="bubble b r hb">{props.sonido}</div>}

      <div className="estiloDivCard">
        <img
          className="estiloImgCard"
          src={props.imagen}
          alt="Imagen del carro"
        />
        <div style={estiloDivCardContenedor}>
          <h2>{props.nombre}</h2>
          <p>
            <b>Descripción:</b> {props.descripcion}
          </p>
          <em>
            <b>Modelo:</b> {props.modelo}
          </em>
          <br />
          {props.anio < 1970 && (
            <img
              src="https://www.atotoclassicclub.com/images/logo_a.png"
              width="32"
              alt="Insignia Clásico"
            />
          )}
          <br />
          <br />
          <button onClick={() => hacerBeep(props.sonido)}>
            Hacer beep-beep
          </button>
        </div>
      </div>
    </div>
  );
}
