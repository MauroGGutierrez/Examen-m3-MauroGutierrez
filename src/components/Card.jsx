import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div class="card">
        <div id="closeIcon" class="row">
            <button onClick={onClose} class="btn btn-sm btn-danger">X</button>
        </div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
              <img class="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="clima" />
            </div>
          </div>
        </div>
      </div>
    );
};
