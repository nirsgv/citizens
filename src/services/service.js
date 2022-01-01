import axios from "axios";

// import getInterceptors from "@/modules/common/services/interceptors.js";

const HTTP = axios.create({
  baseURL: "http://localhost:3000/books",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Origin": "*",
  },
});

// const serviceInterceptors = getInterceptors(HTTP);

// HTTP.interceptors.request.use(
//   serviceInterceptors.REQUEST.onFulfilled,

//   serviceInterceptors.REQUEST.onRejected
// );

// HTTP.interceptors.response.use(
//   serviceInterceptors.RESPONSE.onFulfilled,
//   serviceInterceptors.RESPONSE.onRejected
// );

const get = (route, params) => {
  return HTTP.get(route, { params }).then((res) => res);
};

const put = (route, params) => {
  return HTTP.put(route, params).then((res) => res.data);
};

const post = (route, params) => {

  return HTTP.post(route, params).then((res) => res.data);
};

const remove = (route, params) => {
  return HTTP.delete(route, params).then((res) => res.data);
};

export default {
  get,

  put,

  remove,

  post,
};
