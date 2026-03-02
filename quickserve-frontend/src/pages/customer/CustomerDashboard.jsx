import { Link } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";
import { mockServices } from "../../utils/constants";

function CustomerDashboard() {
  const items = [
    { label: "Dashboard", path: "/customer/dashboard" },
    { label: "My Bookings", path: "/customer/bookings" },
    { label: "Payments", path: "/customer/payments" },
    { label: "Profile", path: "/customer/profile" }
  ];

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Customer" items={items} />
        <div className="space-y-6 lg:col-span-3">
          <div className="grid gap-4 md:grid-cols-3">
            <Card><p className="text-sm text-slate-500">Upcoming bookings</p><h3 className="text-3xl font-bold text-primary">4</h3></Card>
            <Card><p className="text-sm text-slate-500">Recent services</p><h3 className="text-3xl font-bold text-primary">12</h3></Card>
            <Card><p className="text-sm text-slate-500">Recommendations</p><h3 className="text-3xl font-bold text-primary">7</h3></Card>
          </div>

          <Card>
            <h3 className="mb-4 text-xl font-semibold">Recommended services</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {mockServices.slice(0, 2).map((item) => (
                <Link key={item.id} to={`/services/${item.id}`} className="rounded-xl border border-slate-200 p-3 hover:border-primary">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.provider}</p>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
