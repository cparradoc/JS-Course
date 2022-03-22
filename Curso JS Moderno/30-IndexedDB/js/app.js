

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB() {
    //Creae base de datos versión 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error al crear la base de datos');
    }
    //Si se creó bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada');
    }

    //Configuración de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoincrement: true
        });

        //Definir columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false});
        objectStore.createIndex('email', 'email', { unique: true});
        objectStore.createIndex('telefono', 'telefono', { unique: false});

        console.log('Columnas creadas');
    }

}