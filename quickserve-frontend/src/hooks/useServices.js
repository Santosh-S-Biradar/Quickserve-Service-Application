import { useQuery } from "@tanstack/react-query";
import { getServicesRequest } from "../services/serviceService";
import { mockServices } from "../utils/constants";

export default function useServices(params = {}) {
  return useQuery({
    queryKey: ["services", params],
    queryFn: async () => {
      try {
        const response = await getServicesRequest(params);
        return response.data?.data || response.data;
      } catch {
        return mockServices;
      }
    }
  });
}
