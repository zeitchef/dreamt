<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="h-full w-full flex flex-col justify-center items-center">
    <h1 class="text-5xl">Home</h1>
    <div>
      <RouterLink to="/jackpot" class="text-blue-500">Check today's winning numbers</RouterLink>
    </div>
  </main>
</template>
