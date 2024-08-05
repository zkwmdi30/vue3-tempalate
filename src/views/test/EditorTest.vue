<script setup lang="ts">
import Editor from 'primevue/editor';
import { ref } from 'vue';
const value = ref('');
</script>

<template>
  <main>
    <Editor v-model="value" editorStyle="min-width: 1000px; min-height: 320px" />
    <br /><br /><br /><br />
    html :
    <p>{{ value }}</p>
  </main>
</template>
