import axios from 'axios';
import store from '../store';
// import router from '../router'

axios.defaults.showLoader = true;
// axios.defaults.showSkeltonLoader = true;
let config = {
  baseURL: process.env.VUE_APP_BASE_URL,
};
console.log("config",config);
console.log("baseURKL",process.env.VUE_APP_BASE_URL);

const httpClient = axios.create(config);

/** Auth token interceptors */
// const authInterceptor = config => {
//   // const isLoggedIn = true;
//   // if (isLoggedIn) {
//   //     config.headers.Authorization = 'Bearer '+store.state.user.user.token;
//   // }
//   return config;
// };

/** logger interceptors */
const loaderInterceptors = config => {
  if (config.showLoader) {
    store.dispatch('loader/pending');
  }
  return config;
}

/** Adding the request interceptors */
httpClient.interceptors.request.use(loaderInterceptors);
// httpClient.interceptors.request.use(authInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    if (response.config.showLoader) {
      // setTimeout(()=>{
      //   store.dispatch('loader/done');
      //   store.dispatch('loader/skeltonDone'); 
      // },3000);
        
      store.dispatch('loader/done');
    }
    else {
      axios.defaults.showLoader = true;
      // axios.defaults.showSkeltonLoader = true;
    }
    return response;
  },
  error => {
    if(error.config.showSkeltonLoader) {
     store.dispatch('loader/skeltonDone');
    }
    else {
      axios.defaults.showLoader = true;
      // axios.defaults.showSkeltonLoader = true;
    }
    return Promise.reject(error);
  }
);

export { httpClient };