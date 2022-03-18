const monitor3 = "Monitor de 20 pulgadas";
console.log(monitor3);

//Reemplazar cadenas de texto
console.log(monitor3.replace("pulgadas",'"'));
console.log(monitor3.replace("Monitor",'Monitor Curvo'));

//Cortar de la posición 0 a la 10
console.log(monitor3.slice(0, 10));
//Cortar de la posición 8 en adelante
console.log(monitor3.slice(8));
//No corta porque las posiciones no tienen sentido
console.log(monitor3.slice(2, 1));

//Alternativa a slice
console.log(monitor3.substring(0,10));
//En este caso, al ver que no tienen sentido, invierte el orden para poder cortar
console.log(monitor3.substring(2,1));

//Devolver el caracter de una determinada posición de un string
console.log(monitor3.charAt(4));