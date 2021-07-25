import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Para ocupar variables de entorno
import 'dotenv/config.js';

import routes from './routes/index.js';

//Conexion con la Basa de Datos
import './config/database.js';

const app = express();

//Configuraciones
app.use(json());
app.use(urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

//Rutas
app.use('/recetas', routes);

export default app