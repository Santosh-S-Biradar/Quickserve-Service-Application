import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Earnings() {
  const items = [
    { label: "Dashboard", path: "/provider/dashboard" },
    { label: "Add Service", path: "/provider/add-service" },
    { label: "Manage Services", path: "/provider/services" },
    { label: "Bookings", path: "/provider/bookings" },
    { label: "Earnings", path: "/provider/earnings" }
  ];

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{ label: "Completed Jobs", data: [24, 33, 41, 38, 45, 52], borderColor: "#2563EB", backgroundColor: "rgba(37,99,235,0.2)" }]
  };

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Provider" items={items} />
        <Card className="lg:col-span-3">
          <h1 className="mb-5 text-2xl font-semibold">Earnings (INR)</h1>
          <Line data={data} />
        </Card>
      </div>
    </div>
  );
}

export default Earnings;
