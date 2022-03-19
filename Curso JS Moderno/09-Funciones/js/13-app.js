
const reproductor2 = {
    cancion: '',
    resproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar:  () => console.log('Borrando canción...'),
    crearPlaylist: nombrePlaylist => console.log(`Creando playlist ${nombrePlaylist}`),
    reproducirPlaylist: nombrePlaylist => {
        console.log(`Reproduciendo playlist ${nombrePlaylist}`);
    },

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
};  

reproductor2.resproducir(30);
reproductor2.resproducir(20);
reproductor2.pausar();
reproductor2.borrar();
reproductor2.crearPlaylist("Abba");
reproductor2.reproducirPlaylist("Abba");
reproductor2.nuevaCancion = "Enter Sandman";
reproductor2.obtenerCancion;