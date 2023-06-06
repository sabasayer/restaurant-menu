<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from '../composables';
import type { Dish as DishType } from '../types';
import DishForm from './DishForm.vue';
import Dish from './Dish.vue';

const { getAll, getAllLoading } = useApi();
const dishes = ref<DishType[]>([])
const isFormOpen = ref(false);

const init = async () => {
  dishes.value = await getAll();
}

init()

</script>

<template>
    <DishForm v-model="isFormOpen" @saved="init" />
    <div class="bg-white">
    <div class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Restaurant Menu</h1>
          <p class="mt-2 text-sm text-gray-500">Manage the restaurant menu here.</p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Menu Dishes</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div v-if="getAllLoading" class="text-gray-400">Loading...</div>
            <div class="grid grid-cols-4 gap-4">
                <Dish v-for="dish in dishes" :key="dish._id" :item="dish" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>