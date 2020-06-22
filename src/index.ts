import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld); 

app.listen(3333, (request, response) => {
    console.log('🚀 Server is Running on port 3333');
    
});