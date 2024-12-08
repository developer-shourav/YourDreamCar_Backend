import { TCar } from './car.interface';
import { Car } from './car.modle';

/* --------Logic For add a car to DataBase------ */
const addNewCarIntoDB = async (carData: TCar) => {
  const result = await Car.create(carData);

  return result;
};

export const carServices = { addNewCarIntoDB };
