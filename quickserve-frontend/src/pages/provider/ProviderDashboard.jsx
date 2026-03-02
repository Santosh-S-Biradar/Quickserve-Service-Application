import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ProviderDashboard() {
  const items = [
    { label: "Dashboard", path: "/provider/dashboard" },
    { label: "Add Service", path: "/provider/add-service" },
    { label: "Manage Services", path: "/provider/services" },
    { label: "Bookings", path: "/provider/bookings" },
    { label: "Earnings", path: "/provider/earnings" }
  ];

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{ label: "Bookings", data: [4, 7, 5, 8, 10, 6], backgroundColor: "#2563EB" }]
  };

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Provider" items={items} />
        <div className="space-y-6 lg:col-span-3">
          <div className="grid gap-4 md:grid-cols-4">
            <Card><p className="text-sm text-slate-500">Total Earnings</p><h3 className="text-3xl font-bold text-primary">--</h3><p className="text-xs text-slate-500">INR payouts from completed bookings</p></Card>
            <Card><p className="text-sm text-slate-500">Total Bookings</p><h3 className="text-3xl font-bold text-primary">328</h3></Card>
            <Card><p className="text-sm text-slate-500">Rating</p><h3 className="text-3xl font-bold text-primary">4.8</h3></Card>
            <Card><p className="text-sm text-slate-500">Active Services</p><h3 className="text-3xl font-bold text-primary">14</h3></Card>
          </div>
          <Card>
            <h3 className="mb-4 text-xl font-semibold">Booking Trends</h3>
            <Bar data={chartData} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProviderDashboard;
