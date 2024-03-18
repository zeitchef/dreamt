<script setup>
import { useQuery } from '@tanstack/vue-query'

const { isLoading, isFetching, isError, data, error } = useQuery({
  queryKey: ['jackpot'],
  queryFn: getLotteryNumbers
})
</script>

<template>
  <div class="about">
    Euro Jackpot Here
  </div>
</template>
