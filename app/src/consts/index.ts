import { EnumAvailabality, EnumCategory } from "../types";
import { SelectOption } from "../types/select-option";

export const CATEGORIES: SelectOption[] = [
    {
        value: EnumCategory.beverage,
        label: 'Beverage'
    },
    {
        value: EnumCategory.dessert,
        label: 'Dessert'
    },
    {
        value: EnumCategory.mainCourse,
        label: 'Main Course'
    },
    {
        value: EnumCategory.starter,
        label: 'Starter'
    }
]

export const AVAILABILITIES: SelectOption[] = [
    {
        value: EnumAvailabality.breakfast,
        label: 'Breakfast'
    },
    {
        value: EnumAvailabality.dinner,
        label: 'Dinner'
    },
    {
        value: EnumAvailabality.lunch,
        label: 'Lunch'
    },
    {
        value: EnumAvailabality.weekdays,
        label: 'Weekdays'
    },
    {
        value: EnumAvailabality.weekend,
        label: 'Weekend'
    }
]