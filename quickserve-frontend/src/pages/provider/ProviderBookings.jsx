import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";

function ProviderBookings() {
  const items = [
    { label: "Dashboard", path: "/provider/dashboard" },
    { label: "Add Service", path: "/provider/add-service" },
    { label: "Manage Services", path: "/provider/services" },
    { label: "Bookings", path: "/provider/bookings" },
    { label: "Earnings", path: "/provider/earnings" }
  ];

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Provider" items={items} />
        <Card className="lg:col-span-3">
          <h1 className="mb-5 text-2xl font-semibold">Provider Bookings</h1>
          <p className="text-slate-600">Incoming booking requests and status updates appear here.</p>
        </Card>
      </div>
    </div>
  );
}

export default ProviderBookings;
