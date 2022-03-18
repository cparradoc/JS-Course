const meses3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

meses3[0] = 'Nuevo mes';
meses3[7] = 'Último mes';

//Si no tiene elementos en posiciones intermedias, se las salta, no rellena el array
meses3[15] = 'Mes 15';

console.table(meses3);