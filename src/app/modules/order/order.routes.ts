import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

/* -------Create an Order */
router.post('/', OrderControllers.createAnOrder);

/* -------Get total revenue */
router.get('/revenue', OrderControllers.getRevenue);

/* -------Get All Orders */
router.get('/allOrders', OrderControllers.getAllOrders);


export const OrderRoutes = router;
