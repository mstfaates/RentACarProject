import { CarImage } from "./carImage";

export interface CarDetail{
    Id:number;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    modelYear:number;
    description:string;
    model:string;
    carImage:CarImage[];
}