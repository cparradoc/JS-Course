import Citas from '../js/classes/Citas';


describe("Probar la clase de citas", () => {

    const citas = new Citas();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Parrado',
            telefono: '6666',
            fecha: '10/12/2022',
            hora:'10:30',
            sintomas: 'No se calla'
        };

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();



    });
});