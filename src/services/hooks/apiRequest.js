import axios from "axios";

export const useApi = axios.create({
  baseURL: "http://localhost:300/api",
  withCredentials: true,
});
