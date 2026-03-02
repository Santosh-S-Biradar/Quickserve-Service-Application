import api from "./api";

export const createBookingRequest = (payload) => api.post("/bookings", payload);
export const getBookingsRequest = () => api.get("/bookings");
export const cancelBookingRequest = (id) => api.patch(`/bookings/${id}/cancel`);
