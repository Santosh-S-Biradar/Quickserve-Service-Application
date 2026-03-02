import api from "./api";

export const getServicesRequest = (params) => api.get("/services", { params });
export const getServiceByIdRequest = (id) => api.get(`/services/${id}`);
export const addServiceRequest = (payload) => api.post("/services", payload);
