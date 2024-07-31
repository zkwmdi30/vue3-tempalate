<script setup lang="ts">
import axios from '@/util/axios';
import { alertPopup } from '@/util/swal';

defineProps<{
  msg: string;
}>();

const NODE_ENV = import.meta.env.NODE_ENV;
const VITE_APP_API_PATH = import.meta.env.VITE_APP_API_PATH;

axios.get('/test');

alertPopup({ content: 'test' });
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with

      <!-- {{ import.meta.env.VITE_APP_API_PATH }} -->
      {{ NODE_ENV }}
      {{ VITE_APP_API_PATH }}
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
