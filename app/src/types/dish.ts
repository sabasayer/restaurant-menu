import { EnumAvailabality } from "./availability.enum";
import { EnumCategory } from "./category.enum";

export interface Dish {
    _id: string;
    _Created: string;
    _Changed?: string;
    name: string;
    description: string;
    price: number;
    category: EnumCategory;
    availability: EnumAvailabality[];
    active: boolean;
    /**
     * minutes
     */
    preperationTime: number;
}