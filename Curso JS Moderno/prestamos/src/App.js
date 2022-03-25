import React, {Fragment, useState} from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import './App.css';

function App() {

    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Préstamos"
        cantidad={cantidad}
      />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
        />
      </div>
    </Fragment>
  );
}

export default App;
