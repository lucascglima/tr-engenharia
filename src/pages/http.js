// import { default as http } from "axios";
// import process from "process";
// export default function createHttp() {
//   http.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
//   http.interceptors.request.use((request) => {
//     return {
//       ...request,
//       headers: {
//         Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
//       },
//     };
//   });

//   http.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       console.log(error);
//       return Promise.reject(error);
//     }
//   );
// }

// import axios from "axios";
// axios.defaults.baseURL = "http://localhost:1337/api/";
// axios.defaults.headers = {
//   Accept: "application/json, text/plain, */*",
//   "Content-Type": "application/json",
//   Authorization: `bearer  90baea604cdddc426b6767aea42c617235021137187c36033cd69de04a0bc9bb18b107fd5c5436f6ca87fd4ec2f4868be9166b4afd56d3538e4f3a83d588f6e30cf6d0e1a308a963b8c9d1f6f7b0f25ef35342afa4a81f65865568de5e3b7e21ae38a3eb6c59b7008d2e31629e5525e7f09519684d5b2a8b9b2ca4f8afc1c23b`,
// };
// const http = axios;
// export default http;

// export type Dictionary<T = string> = {
//   [key: string]: T,
// };

// export function paramsSerializer(params: Dictionary<unknown>) {
//   return Object.keys(params).reduce((qs, key) => {
//     const param = params[key];
//     if (!param) {
//       return qs;
//     }
//     if (Array.isArray(param)) {
//       if (param.length === 0) {
//         return qs;
//       }
//       return `${qs}&${key}=${param.join(",")}`;
//     }
//     return `${qs}&${key}=${param}`;
//   }, "");
// }
