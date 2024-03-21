<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen w-full flex flex-col bg-blue-100">
    <header>
      <div class="wrapper">
        <nav class="p-4 grow-0 border-black">
          <RouterLink to="/" class="mr-4">Welcome</RouterLink>
          <RouterLink to="/jackpot">EuroJackpot</RouterLink>
        </nav>
      </div>
    </header>

    <main class="grow w-full">
      <RouterView />
    </main>

    <footer class="grow-0 p-4 flex justify-between border border-black">
      <p>Made with ❤️ by ZeitWeb</p>
      <p>&copy; {{ new Date().getFullYear() }} LottoHeaven</p>
    </footer>
  </div>
</template>
