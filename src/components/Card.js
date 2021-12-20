import React from 'react';

export default function Card(props){
  return(
    <div className="col-md-12 border m-1">
      <div className="row p-3">
        <div className="col-6 text-left">
            <p>{props.name}</p>
            <p>{props.unity} unidade - R$ {props.price}</p>
        </div>
        <div className="col-6 text-center d-flex">
            <p className="fs-1"><strong>R$ {props.price * props.unity}</strong></p>
            <a href="#">
              <i class="far fa-trash-alt fs-1"></i>
            </a>
        </div>
      </div>
  </div>
  );
}
