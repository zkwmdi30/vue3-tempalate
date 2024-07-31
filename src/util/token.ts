import { jwtDecode } from 'jwt-decode';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();

export const parseAccessToken = () => {
  const token = cookies.get('access-token');
  return token ? jwtDecode(token) : null;
};
