import axios from "axios";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error(
    "Missing NEXT_PUBLIC_API_URL environment variable"
  );
}

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default API;
