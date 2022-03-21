const nombre = localStorage.getItem('nombre');
console.log(nombre);

const nombre2 = localStorage.getItem('nombre2');
console.log(nombre2);

const productoJSON = localStorage.getItem('producto');
console.log(productoJSON);

//Pasar de string a objeto
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));

