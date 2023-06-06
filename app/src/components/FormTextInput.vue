<script setup lang="ts">
defineProps<{modelValue:string;label:string;required?:boolean}>();
const emit = defineEmits<{(e:'update:modelValue',value:string):void}>();
const onInput = (value:Event) => emit('update:modelValue',(value.target as HTMLInputElement).value);
</script>
<template>
    <div>
      <label :for="label" class="block text-sm font-medium leading-6 text-gray-900">{{label}}</label>
      <div class="mt-2">
        <input type="text" :value="modelValue" @input="onInput" :required="required" :name="label" :id="label" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
  </template>