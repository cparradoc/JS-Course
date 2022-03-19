//Si no se le pasa apellido, tiene un valor por defecto
function saludar(nombre = "Desconocido", apellido = "") {
    console.log(`Hola ${nombre} ${apellido}`);
};

saludar("Carlos", "Parrado");

saludar("Carlos");

saludar();
