const reproductor = {
    resproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function () {
        console.log('Borrando canción...');
    },
    crearPlaylist: function(nombrePlaylist) {
        console.log(`Creando playlist ${nombrePlaylist}`);
    },
    reproducirPlaylist: function(nombrePlaylist) {
        console.log(`Reproduciendo playlist ${nombrePlaylist}`);
    }
};  

reproductor.resproducir(30);
reproductor.resproducir(20);
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Abba");
reproductor.reproducirPlaylist("Abba");