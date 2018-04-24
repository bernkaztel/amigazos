import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import iconcoin from '../images/coin.png';
import iconcoin1 from '../images/credit-card.png';
import iconcoin2 from '../images/coins.png';

const Example = (props) => {
  return (
    <div>
      <Jumbotron id="txtform" className="jumbo-pack font-family">
        <h4>Elige el tipo de sala al que deseas entrar</h4>
        <h2 className="backline"><img src={iconcoin} className="iconI"/>Sala Normal</h2>
        <p className="lead font-family">Es una sala normal en donde puedes conocer genter normal por 20 pesos al mes</p>
        <h2 className="backline"><img src={iconcoin1} className="iconI"/>Sala Premium</h2>
        <p className="lead font-family">Es una sala en donde puedes conocer gente Premium por 200 pesos al mes</p>
        <h2 className="backline"><img src={iconcoin2} className="iconI"/>Sala VIP</h2>
        <p className="lead font-family">Es la sala de gente VIP por 2000 pesos al mes.</p>
      </Jumbotron>
    </div>
  );
};

export default Example;
