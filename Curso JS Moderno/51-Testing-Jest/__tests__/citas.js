import Citas from '../js/classes/Citas';


describe("Probar la clase de citas", () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Parrado',
            telefono: '6666',
            fecha: '10/12/2022',
            hora:'10:30',
            sintomas: 'No se calla'
        };

        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();



    });

    test('Actualizar nueva cita', () => {
        const citaActualizar = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Parrado',
            telefono: '6666',
            fecha: '10/12/2022',
            hora:'10:30',
            sintomas: 'No se calla'
        };

        citas.editarCita(citaActualizar);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});