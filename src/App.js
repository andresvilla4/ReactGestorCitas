import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

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
            <h2>Administra tus citas</h2>
            {citas.map(cita =>(
					<Cita 
						key={cita.id}
						cita={cita}
					/>
				))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
