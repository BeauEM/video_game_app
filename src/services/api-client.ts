import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "789626d96974479a8f993352016cc446",
  },
});
