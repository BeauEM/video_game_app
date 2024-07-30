import axios from "axios";

const RAWG_KEY = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_KEY,
  },
});
