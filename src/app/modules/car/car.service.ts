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
/* --------------Logic For get all cars form Database --------- */
const getAllCarsFromDB = async () => {
  const result = await Car.find();
  return result;
};

/* --------------Logic For get single car form Database --------- */
const getSingleCarFromDB = async (carId: string) => {
  const result = await Car.findOne({ _id: carId });
  return result;
};

export const carServices = {
  addNewCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
};
