<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from './composables/useApi';
import { Dish } from './types';

const {getAll} = useApi();
const dishes = ref<Dish[]>([])

const init = async () => {
  dishes.value = await getAll();
}

init()

</script>

<template>
  
  <div >
      {{ dishes }}
  </div>
</template>
