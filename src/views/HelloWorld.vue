<script setup lang="ts">
import { ref } from 'vue';
defineProps(['msg']);

const NODE_ENV = import.meta.env.NODE_ENV;
const VITE_APP_API_PATH = import.meta.env.VITE_APP_API_PATH;

// Define interfaces
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

import { useQuery } from 'vue-query';
import axios from '@/util/axios';
const postsId = ref(0);

const { data: posts } = useQuery({
  queryKey: ['fetchPosts'],
  queryFn: async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return data;
  },
  staleTime: Infinity,
  onSuccess: async (data: any) => {
    if (data.length > 0) {
      postsId.value = data.find((el: any) => el)?.id;
      refetch.value();
    }
  }
});

const {
  isLoading,
  isError,
  data: postData,
  error,
  refetch
} = useQuery<User>({
  queryKey: ['fetchPostData'],
  queryFn: async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postsId.value}`);
    return data;
  },
  staleTime: Infinity,
  enabled: false
});
const changeUser = async () => {
  postsId.value++;
  await refetch.value();
  alertPopup({ content: 'postData.title : ' + postData.value.title });
  alertPopup({ content: postData.value.title });
};

import { alertPopup } from '@/util/swal';
alertPopup({ content: 'test' });
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <button @click="changeUser">getUsersData</button>

      {{ NODE_ENV }}
      {{ VITE_APP_API_PATH }}
      <span v-if="isLoading">Loading...</span>
      <span v-else-if="isError">Error: {{ error.message }}</span>
      <div v-else>
        <p>data : {{ postData }}</p>
      </div>
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
