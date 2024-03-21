<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  numbers?: number[]
  additonalNumbers?: number[]
}>()
</script>

<template>
  <div v-if="numbers" class="mt-8 flex items-stretch justify-evenly">
    <span
      v-for="(number, index) in props.numbers"
      :key="index"
      class="mr-2 flex w-12 items-center justify-center bg-red-500 p-4 text-white"
    >
      {{ number }}</span
    >
  </div>
  <div v-if="additonalNumbers" class="mt-4 flex justify-center">
    <span
      v-for="(number, index) in props.additonalNumbers"
      :key="index"
      class="mr-2 flex w-12 items-center justify-center bg-yellow-500 p-4"
    >
      {{ number }}</span
    >
  </div>
  <p v-else class="mt-4">
    No numbers today. Try selecting another date or check for local drawing times.
  </p>
</template>
