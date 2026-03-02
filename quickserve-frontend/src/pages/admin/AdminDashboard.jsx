import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminDashboard() {
  const items = [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Manage Users", path: "/admin/users" },
    { label: "Manage Providers", path: "/admin/providers" },
    { label: "Manage Services", path: "/admin/services" },
    { label: "Reports", path: "/admin/reports" }
  ];

  const data = {
    labels: ["Users", "Bookings", "Providers", "Active Cities"],
    datasets: [{ label: "Platform Stats", data: [1200, 3400, 280, 22], backgroundColor: ["#2563EB", "#0EA5E9", "#F59E0B", "#16A34A"] }]
  };

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Admin" items={items} />
        <div className="space-y-6 lg:col-span-3">
          <div className="grid gap-4 md:grid-cols-3">
            <Card><p className="text-sm text-slate-500">Total users</p><h3 className="text-3xl font-bold text-primary">1,200</h3></Card>
            <Card><p className="text-sm text-slate-500">Total bookings</p><h3 className="text-3xl font-bold text-primary">3,400</h3></Card>
            <Card><p className="text-sm text-slate-500">Revenue</p><h3 className="text-3xl font-bold text-primary">--</h3><p className="text-xs text-slate-500">INR revenue from live transactions</p></Card>
          </div>
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Analytics</h2>
            <Bar data={data} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
