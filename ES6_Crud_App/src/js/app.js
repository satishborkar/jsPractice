import { Vehicle } from "./Vehicle";
import { BookVehicle } from "./BookVehicle";

export const tata407 = new Vehicle();
tata407.brand = "Tata";
tata407.type = "407";
tata407.capacity = "8";

export const book709 = new BookVehicle();

book709.brand = "Tata";
book709.type = "709";
book709.capacity = "12";
book709.from = "Pune";
book709.to = "Mumbai";
book709.delivaryDate = "18/07/2018";
book709.materialType = "Electronics";
