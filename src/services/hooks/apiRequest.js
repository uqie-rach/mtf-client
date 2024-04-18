import axios from "axios";

export const useApi = axios.create({
  baseURL: "https://mtf-api.vercel.app/api",
  withCredentials: true,
});
