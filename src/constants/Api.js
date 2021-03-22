/* eslint-disable */

import axios from "axios";
function createAxios() {
  // AsyncStorage.setItem('token', '773DE1FE9732F26F7552BC921CBE347E')
  var axiosInstant = axios.create();
  // axiosInstant.defaults.baseURL = 'https://fakestoreapi.com/products'
  // axiosInstant.defaults.baseURL = 'https://76308974-3b0a-4d62-a82f-b3309f610f11.mock.pstmn.io/'
  axiosInstant.defaults.baseURL = "../dev-data";
  axiosInstant.defaults.timeout = 20000;
  axiosInstant.defaults.headers = { "Content-Type": "application/json" };

  axiosInstant.interceptors.request.use(
    async config => {
      //   config.headers.token = await AsyncStorage.getItem('token')
      return config;
    },
    error => Promise.reject(error)
  );

  axiosInstant.interceptors.response.use(response => {
    if (response.data && response.data.code === 403) {
      setTimeout(() => {
        // alert('Thông báo', I18n.t('relogin'))
      }, 100);
    } else if (response.data && response.data.status !== 1) {
      setTimeout(() => {
        // alert('Thông báo', response.data.message)
      }, 100);
    }
    return response;
  });
  return axiosInstant;
}

export const getAxios = createAxios();

/* Support function */
function handleResult(api) {
  return api.then(res => {
    console.log(res, "darr");
    if (res.data.success === false) {
      return Promise.reject(new Error("Co loi xay ra"));
    }
    return Promise.resolve(res.data);
  });
}

export const getItem = async sort => {
  // return handleResult(
  // getAxios.get(`/item.json`)
  // getAxios.get(`?sort=${sort || 'desc'}`)
  // getAxios.get(`?sortBy=${sort || 'price'}&order=${'desc'}&page=${page || 1}&limit=8`)
  // )
  axios
    .get("../dev-data/item.json")
    .then(el => console.log(el))
    .catch(err => console.log(err));
};
