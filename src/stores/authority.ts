import type { JwtPayload } from 'jwt-decode';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuth = defineStore('authority', () => {
  const user = ref(null as JwtPayload | null);
  const needLogin = ref(true);

  const login = async () => {};
  const logout = async () => {};
  const forceLogout = async () => {};

  return { user, needLogin, login, logout, forceLogout };
});
