<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { formatDate } from '@/utils/date'
import NumberDisplay from '@/components/NumberDisplay.vue'

const date = new Date()
const dateRef = ref(date)
const formattedDate = computed(() => formatDate(dateRef.value))

const query = gql(`
  query getDraw ($date: String!, $limit: Int!, $type: String!) {
    draw (date: $date, limit: $limit, type: $type) {
      draws {
        numbers 
        additionalNumbers
      }
    }
  }
`)

const { result, loading, error } = useQuery(query, {
  date: formattedDate,
  limit: 3,
  type: 'eurojackpot'
})

const numbers = computed(() => result.value?.draw?.draws[0]?.numbers)
const additonalNumbers = computed(() => result.value?.draw?.draws[0]?.additionalNumbers)
</script>

<template>
  <div class="mt-12 flex h-full w-full flex-col items-center p-4">
    <section class="w-full max-w-96">
      <VueDatePicker
        v-model="dateRef"
        :clearable="false"
        :max-date="date"
        :enable-time-picker="false"
        class="w-full"
      />
    </section>

    <section class="mt-8">
      <header class="flex justify-center">
        <h1 class="text-3xl font-bold">{{ formattedDate }}</h1>
      </header>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error.message }}</div>

      <main v-if="result">
        <NumberDisplay :numbers="numbers" :additonalNumbers="additonalNumbers" />
      </main>
    </section>
  </div>
</template>
