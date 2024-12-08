import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.routes';
const app: Application = express();

/* --------Parser--------- */
app.use(express.json());
app.use(cors());

/* ------- Application Routes----------  */
// ----- Cars Routes
app.use('/api/cars', CarRoutes);

// ----- Orders Routes
//app.use('/api/orders', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to YourDreamCar 🎉✨');
});

export default app;
