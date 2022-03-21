localStorage.removeItem('nombre');

//Actualizar registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo mes');
localStorage.setItem('meses', JSON.stringify(mesesArray));