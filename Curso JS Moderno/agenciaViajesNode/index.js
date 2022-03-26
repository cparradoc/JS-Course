import express from 'express';
import router from './routes/index.js';
//import db from './config/db.js';

const app = express();

//Conectar la base de datos
/*db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(Error));*/

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next) => { //next- ya terminé, vamos al siguiente middleware
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carperta pública
app.use(express.static('public'));

//Agregar router
app.use('/', router);



app.listen(port, () =>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
})