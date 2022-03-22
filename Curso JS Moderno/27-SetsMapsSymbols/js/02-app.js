//WeakSet

const weakset = new WeakSet();

//Solo admite objetos
const cliente = {
    nombre: 'Carlos',
    saldo: 100
}

const nombre = 'juan';

weakset.add(cliente);
//weakset.add(nombre); da error por intentar aladirle una variable no objeto
console.log(weakset.has(cliente));

// weakset.delete(cliente);

//No son iterables ni existe su .size

console.log(weakset);