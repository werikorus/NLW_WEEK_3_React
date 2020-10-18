import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import './database/connection';
import errorHandler from './errors/handler';
import 'express-async-errors';

const app = express();

// { para reconhecer json }
app.use(express.json());

// {rotas}
app.use(cors({}));
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
app.listen(3333);
