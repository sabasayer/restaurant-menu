<script setup lang="ts">
import { useApi } from '../composables';
import { Dish, EnumCategory } from '../types';
import {PencilIcon,TrashIcon} from "@heroicons/vue/20/solid"

const props = defineProps<{item:Dish}>();
const emit = defineEmits<{(e:'removed',item:Dish):void;(e:'edit',item:Dish):void}>();


const {remove:removeItem} = useApi();
const category = (value:EnumCategory) => EnumCategory[value]


const remove = async () => {
    const res = await removeItem(props.item._id as string);
    if(res?.status === "OK"){
        emit('removed',props.item)
    }
}

const edit = () => emit('edit',props.item)
</script>

<template>
    <div class="bg-gray-50 py-6 px-4 rounded-md flex flex-col" :class="{'bg-gray-200':!item.active}">
        <div class="flex-1">

            <div class="text-xl font-semibold mb-2">{{ item.name }}</div>
            <div class="text-gray-400">{{ item.description }}</div>
            <div>
                <span class="text-gray-500">
                    Price: 
                </span>
                <span>{{ item.price }}$</span>
            </div>
            <div>
                <span class="text-gray-500">
                    Category: 
                </span>
                <span>
                    {{ category(item.category) }}
                </span>
            </div>
            <div>
                <span class="text-gray-500">
                    Active: 
                </span>
                <span>
                    {{ item.active ? 'true' : 'false' }}
                </span>
            </div>
            <div>
                <span class="text-gray-500">
                    Preperation Time: 
                </span>
                <span>{{ item.preperationTime }}</span>
            </div>
        </div>

        <div class="flex gap-4 pt-4">
            <button @click="edit" type="button" class="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex gap-2 items-center">
                <PencilIcon class="w-5 h-5"/>
                <span>
                    Edit
                </span>
            </button>
            <button @click="remove" type="button" class="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex gap-2 items-center">
                <TrashIcon class="w-5 h-5 text-red-600"/>
                <span>
                    Delete
                </span>
            </button>
        </div>
    </div>
</template>