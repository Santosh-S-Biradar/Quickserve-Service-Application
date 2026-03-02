export const formatCurrency = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "Price set by provider";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(value));
};

export const statusColor = (status) => {
  const map = {
    Pending: "bg-amber-100 text-amber-700",
    Accepted: "bg-blue-100 text-blue-700",
    Completed: "bg-emerald-100 text-emerald-700",
    Cancelled: "bg-rose-100 text-rose-700"
  };
  return map[status] || "bg-slate-100 text-slate-700";
};

export const getDashboardPath = (role) => {
  const map = {
    customer: "/customer/dashboard",
    provider: "/provider/dashboard",
    admin: "/admin/dashboard"
  };
  return map[role] || "/";
};
