import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// imports Swagger
// imports Routes
// imports Middlewares
// Config para variables de entorno
import config from './config/config.js';

// Declaramos la constante app igualandola a express
const app = express();
// Establece la conexion a la BD
import { mongoose } from './config/database.config.js';

// Import Routes
import routeAPI from './api/v1/routes/index.js';

// Settings
app.set('port', config.PORT);
// Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/DrFIC', (req,res)=>{
    res.send(
        `<h1>RESTful running in Dr FIC</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
// Routes
// Swagger Docs
// Middleware para el manejo de errores

// Routes
routeAPI(app);

// Export App
export default app;
