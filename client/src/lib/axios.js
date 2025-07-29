import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://pointify.onrender.com/api/user"
      : "/api",
  withCredentials: true,
});
