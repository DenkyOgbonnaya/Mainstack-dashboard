import { BASE_URL } from "@/constants/evironment";
import axios from "axios";

const axiosInstants = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstants;
