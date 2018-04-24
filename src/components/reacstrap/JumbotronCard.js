import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../style.css'

const Example = (props) => {
  return (
    <div>
      <Jumbotron id="banner-one">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">Tienes una idea que puede convertirse en ingresos?</p>
        <hr className="my-2" />
        <p>Unete a nuestra app, aquí encontrarás personas que te ayudarán a convertirlas en realidad.</p>
      </Jumbotron>
    </div>
  );
};

export default Example;
