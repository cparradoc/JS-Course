import { formulario, mascotaInput, horaInput, fechaInput, 
    propietarioInput, sintomasInput, telefonoInput } from '../selectores.js'
import {nuevaCita, datosCita} from '../funciones.js'

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        
        formulario.addEventListener('submit', nuevaCita);       
    }
}

export default App;