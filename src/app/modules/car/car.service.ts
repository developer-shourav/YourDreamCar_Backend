import { TCar } from './car.interface';
import { Car } from './car.modle';

/* --------Logic For add a car to DataBase------ */
const addNewCarIntoDB = async (carData: TCar) => {
  // Check The same car already exist or not
  if (
    await Car.isCarExists(
      carData.brand,
      carData.model,
      carData.year,
      carData.category,
    )
  ) {
    throw new Error('Car already exist!');
  }
  const result = await Car.create(carData);
  return result;
};

export const carServices = { addNewCarIntoDB };
