import express from 'express';
import cors from 'cors';

import { PEOPLE } from './initial-data.js';

const app = express();
app.use(cors());

app.get('/', (req, res) =>{
    res.json(PEOPLE);
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080.');
});