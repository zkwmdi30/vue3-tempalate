import './assets/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
const app = createApp(App);

import { createHead } from '@vueuse/head';
const head = createHead();
app.use(head);

import router from '@/router';
app.use(router);

import { createPinia } from 'pinia';
app.use(createPinia());

import { useCookies } from 'vue3-cookies';
import { useAuth } from '@/stores/authority';
import { parseAccessToken } from '@/util/token';
const auth = useAuth();
const { cookies } = useCookies();
if (cookies.get('access-token')) {
  auth.user = parseAccessToken();
}

app.mount('#app');
