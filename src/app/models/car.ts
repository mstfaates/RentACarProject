import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    brandId:number;
    colorId:number;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    model:string;
    carImage:CarImage[];
}