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
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

import { useCookies, globalCookiesConfig } from 'vue3-cookies';
globalCookiesConfig({
  expireTimes: '30d',
  secure: true,
  sameSite: 'None'
});
import { useAuth } from '@/stores/authority';
import { parseAccessToken } from '@/util/token';
const auth = useAuth();
const { cookies } = useCookies();
if (cookies.get('access-token')) {
  auth.user = parseAccessToken();
}

import { VueQueryPlugin } from 'vue-query';
app.use(VueQueryPlugin);

app.mount('#app');
