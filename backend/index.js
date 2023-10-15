import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
} from './middlewares/error.handler.js';
import routerApi from './routes/index.js';
import connectDB from './database/connect.js';

const app = express();
connectDB();
app.use(express.json());

app.use(cors());

routerApi(app);

app.use('/status', (_, res) => {
  res.status(200).send(process.env.FRONTEND_URL);
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(5000, () => console.log('Server running on port 5000'));
