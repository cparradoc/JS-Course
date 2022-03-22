const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);
cliente.set([0], true);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has('nombre'));
console.log(cliente.has('Karen'));
console.log(cliente.get('nombre'));

cliente.delete('saldo');
console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));


cliente.clear();

const paciente = new Map( [['nombre', 'paciente'], ['cuarto', 'no definido']]);
paciente.set('dr', 'parrado');
paciente.set('nombre', 'pedro'); //reescribe el valor de esa llave
console.log(paciente);

paciente.forEach( datos => {
    console.log(datos);
});

paciente.forEach( (datos, index) => {
    console.log(index);
});