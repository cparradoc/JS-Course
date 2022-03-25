const cliente = {
    nombre: "Juan",
    balance: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Juan', () => {
        expect(cliente.nombre).toBe('Juan');
    });

    test('No es Juan', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(500);
    });
});