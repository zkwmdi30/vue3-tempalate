<script setup lang="ts">
import { ref } from 'vue';
defineProps(['msg']);

const NODE_ENV = import.meta.env.NODE_ENV;
const VITE_APP_API_PATH = import.meta.env.VITE_APP_API_PATH;

import { useQuery } from 'vue-query';
import axios from '@/util/axios';
const fetchEnable = ref(false);
const userId = ref(1);
const {
  isLoading,
  isError,
  data: users,
  error
} = useQuery({
  queryKey: ['fetchUsers', userId],
  queryFn: async () => {
    const { data } = await axios.get(`/users/${userId.value}`);
    fetchEnable.value = false;
    return data;
  },
  staleTime: Infinity
});
const changeUser = () => {
  userId.value++;
};

import { alertPopup } from '@/util/swal';
alertPopup({ content: 'test' });
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with

      <button @click="changeUser">getUsersData</button>

      {{ NODE_ENV }}
      {{ VITE_APP_API_PATH }}
      <span v-if="isLoading">Loading...</span>
      <span v-else-if="isError">Error: {{ error.message }}</span>
      <div v-else>
        {{ users }}
      </div>
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
