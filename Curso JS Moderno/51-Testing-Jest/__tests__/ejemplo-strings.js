const password = "123456";

describe('Valida que el password no esté vacío y tenga una extensión de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Que el password no esté vacío', () => {
        expect(password).not.toHaveLength(0);
    });
});