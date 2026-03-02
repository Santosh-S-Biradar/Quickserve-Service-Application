import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";
import { mockServices } from "../../utils/constants";

function ManageServices() {
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
          <h1 className="mb-5 text-2xl font-semibold">Manage Services</h1>
          <div className="space-y-3">
            {mockServices.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center justify-between rounded-lg border border-slate-200 p-3">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.location}</p>
                </div>
                <div className="space-x-3 text-sm">
                  <button className="text-primary">Edit</button>
                  <button className="text-rose-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ManageServices;
