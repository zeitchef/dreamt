<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
// import { format } from '@formkit/tempo'

const query = gql(`
  query getDraw ($date: String!, $limit: Int!, $type: String!) {
    draw (date: $date, limit: $limit, type: $type) {
      backendError
    }
  }
`)
const variables = {
  date: 'Jan 18 2018',
  limit: 3,
  type: 'eurojackpot'
}

const { result } = useQuery(query, variables)
</script>

<template>
  <div class="about">
    <h1 class="text-3xl">About</h1>
    <pre>{{ result || 'No result' }}</pre>
  </div>
</template>
