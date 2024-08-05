<script setup lang="ts">
import HelloWorld from '@/views/HelloWorld.vue';
import TheWelcome from '@/views/TheWelcome.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="axios 및 vue-query" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
