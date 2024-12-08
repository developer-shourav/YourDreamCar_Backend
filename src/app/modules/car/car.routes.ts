import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

/* -------Create a Car */
router.post('/', CarControllers.addNewCar);

/* -------Get All Cars */
router.get('/', CarControllers.getAllCars);

/* -------Get Single Car */
router.get('/:carId', CarControllers.getSingleCar);

/* -------Delete A Car */
router.delete('/:carId', CarControllers.deleteSingleCar);

export const CarRoutes = router;
