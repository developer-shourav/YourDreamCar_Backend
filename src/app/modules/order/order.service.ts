import { Car } from '../car/car.modle';
import { TOrder } from './order.interface';
import { Order } from './order.modle';

/* ----------- Create a new order and manage inventory ----------- */
const createNewOrder = async (orderData: TOrder) => {
  //----------- Find the car by its ID
  const car = await Car.findById(orderData.car);
  if (!car) {
    throw new Error('Car not found!');
  }

  //----------- Check if sufficient quantity is available
  if (car.quantity === 0 || car.inStock === false ||  car.quantity < orderData.quantity) {
    throw new Error('Insufficient stock available!');
  }

   //----------- Calculate the total price
   const totalPrice = car.price * orderData.quantity;

   //----------- Check if User Given Price is correct or not 
  if (totalPrice !== orderData.totalPrice) {
    throw new Error('Your added price is not equal to car actual price!');
  }

   //----------- Update the car's inventory
   car.quantity -= orderData.quantity;
   if (car.quantity === 0) {
     car.inStock = false;
   }
   await car.save();
 
   //----------- Create a new order
   const newOrder = await Order.create(orderData);
   return newOrder;
};




export const OrderServices = { createNewOrder };
