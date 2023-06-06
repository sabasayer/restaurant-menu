<script lang="ts" setup>
import { SelectOption } from '../types/select-option';
import FormCheckBox from './FormCheckBox.vue';

const props = defineProps<{modelValue:any[];options:SelectOption[];label:string}>();
const emit = defineEmits<{(e:'update:modelValue',value:any[]):void}>();

const exists = (value:any) =>  props.modelValue?.some(e=>e===value);

const onInput = (value:any,checked:boolean) => {
  let emitValue = props.modelValue ?? [];
  if(checked){
    emitValue = [...emitValue,value]
  }
  else{
    emitValue = emitValue.filter(e=>e!==value)
  }

  emit('update:modelValue',emitValue)

}

</script>
<template>
  <div>
    <label class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
    <FormCheckBox v-for="item in options" :key="item.value" :model-value="exists(item.value)" @update:model-value="onInput(item.value,$event)" :label="item.label" />
  </div>
</template>