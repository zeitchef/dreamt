<script setup lang="ts">
import { computed, toRefs } from 'vue'
const props = defineProps<{
  numbers?: number[]
  additionalNumbers?: number[]
}>()

const { numbers, additionalNumbers } = toRefs(props)
const renderEmptyState = computed(() => !props.numbers && !props.additionalNumbers)
</script>

<template>
  <div v-if="numbers" data-test="numbers" class="mt-8 flex items-stretch justify-evenly">
    <span v-for="(number, index) in numbers" :key="index"
      class="mr-2 flex w-12 items-center justify-center bg-red-500 p-4 text-white">
      {{ number }}
    </span>
  </div>
  <div v-if="additionalNumbers" data-test="additional-numbers" class="mt-4 flex justify-center">
    <span v-for="(number, index) in additionalNumbers" :key="index"
      class="mr-2 flex w-12 items-center justify-center bg-yellow-500 p-4">
      {{ number }}
    </span>
  </div>
  <p v-if="renderEmptyState" data-test="no-numbers" class="mt-4">
    No numbers today. Try selecting another date or check for local drawing times.
  </p>
</template>
