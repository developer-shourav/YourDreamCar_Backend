import { Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { OrderServices } from './order.service';
import { Types } from 'mongoose';

/* ------------------- Create a New Order ------------------- */
const createAnOrder = async (req: Request, res: Response) => {
  try {
    // ---------Validate the request body
    const orderData = orderValidationSchema.parse(req.body);

    // ---------Convert car to ObjectId
    const parsedOrderData = {
      ...orderData,
      car: new Types.ObjectId(orderData.car), 
    };

    // ---------Create a new order
    const result = await OrderServices.createNewOrder(parsedOrderData);

    // Send a success response
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (err: any) {
    if (err.name === 'ZodError') {
      // Handle validation errors
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: err.errors,
      });
    } else {
      // Handle other errors
      res.status(err.message === 'Car not found!' ? 404 : 500).json({
        message: err.message || 'Something went wrong!',
        success: false,
        error: err,
      });
    }
  }
};

/* ------------------- Calculate Revenue ------------------- */
const getRevenue = async (req: Request, res: Response) => {
  try {
    // ------Calculate revenue
    const totalRevenue = await OrderServices.calculateTotalRevenue();

    // ------ Send a success response
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (err: any) {
    // ------ Send Error response 
    res.status(500).json({
      message: err.message || 'Something went wrong!',
      success: false,
      error: err,
    });
  }
};
export const OrderControllers = {
  createAnOrder,
  getRevenue
};
