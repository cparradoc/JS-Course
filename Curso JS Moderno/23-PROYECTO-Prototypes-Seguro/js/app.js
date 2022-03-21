 function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
 }

Seguro.prototype.cotizarSeguro = function() {
    /*
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    //Cada año el costo se reduce un 3% el calor del seguro
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
    Si el seguro es básico, se multiplica por un 30% más
    Si el seguro es completo, se multiplica por un 50% más
    */
   if(this.tipo === 'basico') {
    cantidad *= 1.3;
   } else {
    cantidad *= 1.5;
   }

   return cantidad;

}


 function UI() {

 }

 UI.prototype.llenarOpciones = () => { 
    const max = new Date().getFullYear(),
          min = max - 20;
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
 }

 UI.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje','mt-1o');
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
 } 

 UI.prototype.mostrarResultado = (seguro, total) => {
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Total: ${total}</p>
    `;
    const resultadoDiv = document.querySelector('#resultado');

    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'none';
    setTimeout(() => {
        spinner.remove();
        resultadoDiv.appendChild(div);
    }, 3000);
 }

 const ui = new UI();


 document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //Llena el select con los años
 });


 eventListeners();
 function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
 }

 function cotizarSeguro(e) {
     e.preventDefault();

     //Leer la marca seleccionada
     const marca = document.querySelector('#marca').value;


     //Leer el año seleccionado
     const year = document.querySelector('#year').value;


     //Leer el tipo de cobertura
     const tipo = document.querySelector('input[name="tipo"]:checked').value;

     if(marca === '' || year === '' || tipo === '') {
         ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
         return;
     } else {
        ui.mostrarMensaje('Cotizando...', 'exito');

        const seguro = new Seguro(marca, year, tipo);
        const total = seguro.cotizarSeguro();

        ui.mostrarResultado(seguro, total);
     }
 }

