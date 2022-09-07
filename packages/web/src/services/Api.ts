import axios from "axios";

export const api = axios.create({
  baseURL: `http://${import.meta.env.VITE_SERVER_NAME || "localhost"}:${
    import.meta.env.VITE_SERVER_PORT || 80
  }/api/`,
});
