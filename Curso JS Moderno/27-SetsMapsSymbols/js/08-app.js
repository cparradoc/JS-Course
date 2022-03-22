const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('Nombre', 'Juan');
datos.set('Profesión', 'Desarrollador web');


//Entries iterator - devuelve llave y valor
for (let entry of ciudades.entries() ) {
    console.log(entry);
}

for (let entry of ordenes.entries() ) {
    console.log(entry);
}

for (let entry of datos.entries() ) {
    console.log(entry);
}

//Values iterator - devuelve los valores
for (let value of ciudades.values()) {
    console.log(value);
}

for (let value of ordenes.values()) {
    console.log(value);
}

for (let value of datos.values()) {
    console.log(value);
}

//Keys iterator - devuelve las llaves
for (let key of ciudades.keys()) {
    console.log(key);
}

for (let key of ordenes.keys()) {
    console.log(key);
}

for (let key of datos.keys()) {
    console.log(key);
}

//Default
for(let ciudad of ciudades){ //valores
    console.log(ciudad);
}

for(let orden of ordenes){ //valores
    console.log(orden);
}

for(let dato of datos){ //entradas
    console.log(dato);
}