import axios from 'axios';

// axios 인스턴스 생성
const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL + import.meta.env.VITE_APP_API_PATH}`,
  withCredentials: true
});

// 요청 interceptors
instance.interceptors.request.use(
  (config) => {
    // console.log('token check API Request:', {
    //   method: config.method,
    //   url: config.url,
    //   headers: config.headers,
    //   data: config.data
    // });
    return config;
  },
  (error) => {
    // 요청 오류 처리
    console.error('request error : ', error);
    return Promise.reject(error);
  }
);

// 응답 interceptors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      // 서버에서 응답을 받은 경우 (HTTP 상태 코드가 존재)
      console.error('Response Error:', {
        status: response.status,
        data: response.data
      });
    } else {
      // 서버에서 응답을 받지 못한 경우 (네트워크 오류 등)
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
