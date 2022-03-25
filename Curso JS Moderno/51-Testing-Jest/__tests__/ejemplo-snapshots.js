const cliente = {
    nombre: 'Carlos 2',
    balance: 150000,
    tipo: 'Premium'
};

//npm t -- -u para sobreescribir el snapshot


describe('Testing al cliente', () => {
    test('Es Carlos', () => {
        expect(cliente).toMatchSnapshot();
    });
});