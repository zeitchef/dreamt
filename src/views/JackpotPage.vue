<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { formatDate } from '@/utils/date'
import { computed } from 'vue'

const formattedDate = formatDate(new Date())

const query = gql(`
  query getDraw ($date: String!, $limit: Int!, $type: String!) {
    draw (date: $date, limit: $limit, type: $type) {
      draws {
        numbers 
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
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <header class="flex justify-center">
      <h1 class="text-3xl font-bold">{{ formattedDate }}</h1>
    </header>
    <!-- loading state -->
    <div v-if="loading">Loading...</div>
    <!-- error state -->
    <div v-else-if="error">{{ error.message }}</div>

    <main v-if="result">{{ numbers || 'No numbers today' }}</main>
  </div>
</template>
