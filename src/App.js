import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {
	
	// Arreglo de citas
	const [citas, guardarCitas] = useState([]);
	
	// Función que tome las citas actuales y agregue la nueva
	const creaCita = cita => {
		guardarCitas([
			...citas,
			cita
		]);
		}
	
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className = "Container">
        <div row="row">
          <div className="one-half column">
            <Formulario 
				creaCita={crearCita}
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
