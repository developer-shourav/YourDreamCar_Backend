import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

/* -------Create a Car */
router.post('/', CarControllers.addNewCar);

/* -------Get All Cars */
router.get('/', CarControllers.getAllCars);


export const CarRoutes = router;
