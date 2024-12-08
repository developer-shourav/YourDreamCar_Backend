import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

/* -------Create a Car */
router.post('/', CarControllers.addNewCar);

export const CarRoutes = router;
