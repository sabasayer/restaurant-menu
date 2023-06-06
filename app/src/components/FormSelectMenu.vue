<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, ListboxLabel } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { computed } from "vue";
import type { SelectOption } from "../types/select-option";

const props = defineProps<{
    label:string;
    options: SelectOption[];
    modelValue: any;
    placeholder?: string;
}>();

const emit = defineEmits<{ (e: "update:modelValue", value: any): void }>();

const updateModel = (value: any) => emit("update:modelValue", value);

const selectedOption = computed(() =>
    props.options.find((e) => (e.value === props.modelValue))
);
</script>

<template>
    <Listbox as="div" :model-value="modelValue" @update:model-value="updateModel">
        <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">{{label}}</ListboxLabel>
        <div class="relative mt-2">
            <ListboxButton
                class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <span class="block truncate" :class="{ 'text-gray-500': !selectedOption }">{{
                    selectedOption?.label ?? placeholder ?? ""
                }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="option in options"
                        :key="option.value"
                        :value="option.value"
                        as="template"
                    >
                        <li
                            :class="[
                                active
                                    ? 'bg-indigo-600 text-white '
                                    : 'text-gray-900 ',
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                            ]"
                        >
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{
                                option.label
                            }}</span>
                            <span
                                v-if="selected"
                                :class="[
                                    active ? 'text-white' : 'text-indigo-600 ',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                ]"
                            >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>
