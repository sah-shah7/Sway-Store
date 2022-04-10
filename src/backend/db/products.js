import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "iPhone",
    price: "4000",
    orginalPrice: "5000",
    categoryName: "SmartPhone",
    rating:4.2,
    
  },
  {
    _id: uuid(),
    title: "MacBook Pro",
    price: "3000",
    orginalPrice: "5000",
    categoryName: "Laptop",
    rating:3.2,
  },
  {
    _id: uuid(),
    title: "iWatch",
    price: "2000",
    orginalPrice: "5000",
    categoryName: "SmartWatch",
    rating:2.2,
  },
  {
    _id: uuid(),
    title: "AirPods",
    price: "1000",
    orginalPrice: "5000",
    categoryName: "Accessories",
    rating:1.2,
  },
];
