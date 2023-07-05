import { handleGetRequest } from "@/services/httpService";
import { DashboardResData } from "../_interface";

export const getDashboardData = () => {
  return handleGetRequest<DashboardResData>("/");
};
