import { EnumAvailabality } from "./availability.enum";
import { EnumCategory } from "./category.enum";

export interface Dish {
    _id?: string;
    _Created?: string;
    _Changed?: string;
    name: string;
    description: string;
    price: string;
    category: EnumCategory;
    availability: EnumAvailabality[];
    active: boolean;
    preperationTime: string;
}