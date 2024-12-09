import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

/* -------Create an Order */
router.post('/', OrderControllers.createAnOrder);

/* -------Get total revenue */
router.get('/revenue', OrderControllers.getRevenue);

export const OrderRoutes = router;
