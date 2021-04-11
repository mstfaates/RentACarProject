import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    brandId:number;
    colorId:number;
    brandName:string;
    colorName:string;
    modelYear:string;
    dailyPrice:number;
    description:string;
    imagePath:string,
    status: boolean,
    findexPoint:number
    model:string;
    carImage:CarImage[];
}