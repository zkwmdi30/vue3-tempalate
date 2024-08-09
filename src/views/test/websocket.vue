<script setup lang="ts">
import { ref } from 'vue';

const token = ref('');
</script>

<template>
  <main>Alli 토큰 입력 : <input type="text" v-model="token" /></main>
</template>
