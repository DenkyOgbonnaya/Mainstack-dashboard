import axiosInstants from "@/lib/axios";

export const handleGetRequest = async <T>(payload: string): Promise<T> => {
  try {
    const { data } = await axiosInstants.get(payload);
    return data;
  } catch (err) {
    throw err;
  }
};
