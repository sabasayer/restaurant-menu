<script lang="ts" setup>
defineProps<{modelValue:boolean;label:string;}>();
const emit = defineEmits<{(e:'update:modelValue',value:boolean):void}>();
const onInput = (value:Event) => emit('update:modelValue',(value.target as HTMLInputElement).checked);
</script>
<template>
    <div class="relative flex items-start my-4">
        <div class="flex h-6 items-center">
          <input :id="label" :value="modelValue" :checked="modelValue" @change="onInput" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label :for="label" class="font-medium text-gray-900">{{label}}</label>
        </div>
      </div>
</template>