<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="mt-8 flex h-full w-full flex-col items-center p-4">
    <h1 class="text-5xl">Welcome to LottoHeaven!</h1>
    <p class="mt-8 max-w-6xl">
      Minim id fugiat ex reprehenderit ut. Quis officia minim deserunt consectetur non laboris
      mollit nostrud duis laborum irure eiusmod nisi. Non irure qui laboris. Est dolore Lorem
      officia non esse nulla pariatur reprehenderit nulla cupidatat. Magna duis aliquip
      reprehenderit. Occaecat et non nulla velit voluptate aliquip ex. Consectetur eiusmod magna ad
      non tempor incididunt nulla culpa proident fugiat sunt laboris excepteur commodo.
    </p>
    <section class="flex flex-col items-center mt-8">
      <button class="mt-8 rounded border-2 border-blue-500 p-2">
        <RouterLink to="/jackpot" class="text-2xl text-blue-500">
          Today's Winning EuroJackpot
        </RouterLink>
      </button>
      <img src="../assets/img/winning.webp" alt="Man winning money flying around him"
        class="md:max-w-6xl mt-8 grow-0 rounded-lg" />
    </section>
  </main>
</template>
