import express from 'express'
import createRoutes from './routes/create';
import counterRoutes from './routes/counter';
import { cors } from './middlewares/cors';
import { nocache } from './middlewares/nocache';

const app = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors);
app.use(nocache);

app.use(createRoutes);
app.use(counterRoutes);

app.listen(PORT, () => {
  console.log('Listening for neko requests');
});
