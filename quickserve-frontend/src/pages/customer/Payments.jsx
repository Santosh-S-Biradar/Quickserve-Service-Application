import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";

function Payments() {
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
        <Card className="lg:col-span-3">
          <h1 className="mb-4 text-2xl font-semibold">Payments</h1>
          <p className="text-slate-600">Payment history and invoices will be displayed here.</p>
        </Card>
      </div>
    </div>
  );
}

export default Payments;
