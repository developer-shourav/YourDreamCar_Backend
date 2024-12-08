export type TCarCategory = 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';

export type TCar = {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: TCarCategory;
  description: string;
  quantity: number;
  inStock: boolean;
};
