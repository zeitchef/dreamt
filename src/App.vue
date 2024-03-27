<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen w-full flex-col">
    <header class="bg-transparent">
      <div class="wrapper">
        <nav class="grow-0 p-4">
          <RouterLink to="/" class="mr-4">Welcome</RouterLink>
          <RouterLink to="/jackpot">EuroJackpot</RouterLink>
        </nav>
      </div>
    </header>

    <main class="w-full grow">
      <RouterView />
    </main>

    <footer class="flex grow-0 justify-between p-4">
      <p>Made with ❤️ by ZeitWeb</p>
      <p>&copy; {{ new Date().getFullYear() }} LottoHeaven</p>
    </footer>
  </div>
</template>
