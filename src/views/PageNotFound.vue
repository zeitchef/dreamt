<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="h-[calc(100vh-128px)] w-full flex flex-col justify-center items-center">
    <img src="../assets/losing.avif" alt="Girl clutching to her losing tickets" class="rounded-lg">
    <p>
      Oh no! Better luck next time. Feel free to try your luck again!
    </p>
    <RouterLink to="/" class="text-blue-500"></RouterLink>
  </main>
</template>
