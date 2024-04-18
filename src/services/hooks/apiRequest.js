import axios from "axios";

export const useApi = axios.create({
  baseURL: "https://localhost:300/api",
  withCredentials: true,
});
