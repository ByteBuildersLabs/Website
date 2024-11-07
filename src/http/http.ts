import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.NEXT_PUBLIC_MARKETPLACE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
