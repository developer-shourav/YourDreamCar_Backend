import { Request, Response } from 'express';
import { carValidationSchema } from './car.validation';
import { carServices } from './car.service';

/* --------------------Add a new car ----------------- */
const addNewCar = async (req: Request, res: Response) => {
  try {
    /* ------Raw data of the request------ */
    const { car: addNewCarData } = req.body;

    /* -----Data Validation with zod------- */
    const carDataZodValidationResult = carValidationSchema.parse(addNewCarData);

    /* ----------Store data to Database -------- */
    const result = await carServices.addNewCarIntoDB(
      carDataZodValidationResult,
    );

    /* ----Send success response to frontend ------ */
    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    if (err.name === 'ZodError') {
      /* ----------Handle validation errors from Zod---------- */
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: {
          name: 'ValidationError',
          errors:  err.errors,
        },
        stack: err.stack, 
      });
    } else {
      /* ----------Handle other errors (e.g., DB errors, etc.) ---------- */
      const errorName = err.name || 'InternalServerError';
      const errorMessage =
        err.message || 'An unexpected error occurred on the server.';

      res.status(500).json({
        message: errorMessage,
        success: false,
        error: {
          name: errorName,
          details: err,
        },
        stack: err.stack, 
      });
    }
  }
};

export const CarControllers = { addNewCar };