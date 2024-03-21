<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="h-full w-full flex flex-col justify-center items-center lg:flex-row px-4 md:px-0">
    <img src="../assets/img/losing.avif" alt="Girl clutching to her losing
      tickets" class="rounded-lg lg:mr-8" />
    <div class="p-4 md:p-0 mt-8 lg:mt-0 flex flex-col items-center">
      <p class="text-6xl">Oh no!</p>
      <p class="mt-4">Better luck next time. That page no longer exists (or did it ever?)</p>
      <RouterLink to="/" class="mt-8 text-blue-700">Start Again</RouterLink>
    </div>
  </main>
</template>
