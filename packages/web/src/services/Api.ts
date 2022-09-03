import axios from "axios";

export const api = axios.create({
  baseURL: `http://${import.meta.env.SERVER_NAME || "localhost"}:${
    import.meta.env.SERVER_PORT || 80
  }/api/`,
});
