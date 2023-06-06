<script setup lang="ts">
import { ref } from "vue";
import { Dish } from "../types";
import Modal from "./Modal.vue";
import { useApi } from "../composables";
import FormTextInput from "./FormTextInput.vue";
import FormCheckBox from "./FormCheckBox.vue";
import FormSelectMenu from "./FormSelectMenu.vue";
import type { SelectOption } from "../types/select-option";
import { AVAILABILITIES, CATEGORIES } from "../consts"
import FormCheckboxMultiple from "./FormCheckboxMultiple.vue";

const props = defineProps<{modelValue:boolean,dish?:Dish}>();
const emit = defineEmits<{(e:'update:modelValue',value:boolean):void, (e:'saved'):void}>();

const {add,addLoading,addError} = useApi();
const model = ref<Dish>(props.dish ?? {} as Dish);

const categories = ref<SelectOption[]>(CATEGORIES)
const availibilities = ref<SelectOption[]>(AVAILABILITIES)

const close = () => emit('update:modelValue',false);

const save = async () => {
    const res = await add(model.value as Dish);

    console.log('res',res);
    

    if(res?.status == 'OK')
    {
        emit('saved')
    }
    else{
        alert(addError.value?.message ?? res?.message ?? 'Save Failed')
    }
}

</script>
<template>
    <Modal title="Add New Dish" :model-value="modelValue" @update:model-value="close">
        <form @submit.prevent="save" class="flex-1 flex-col flex gap-4">
            <FormTextInput label="Name" v-model="model.name" required/>
            <FormTextInput label="Description" v-model="model.description" />
            <FormTextInput label="Price" v-model="model.price" required/>
            <FormSelectMenu label="Category" v-model="model.category" :options="categories" required placeholder="Category"/>
            <FormCheckboxMultiple label="Availability" v-model="model.availability" :options="availibilities" required/>
            <FormCheckBox label="Active" v-model="model.active" />
            <FormTextInput label="Preperation Time" v-model="model.preperationTime" required/>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button @click="close" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" :disabled="addLoading" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </Modal>
</template>