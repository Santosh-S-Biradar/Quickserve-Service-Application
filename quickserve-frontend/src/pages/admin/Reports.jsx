import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";

function Reports() {
  const items = [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Manage Users", path: "/admin/users" },
    { label: "Manage Providers", path: "/admin/providers" },
    { label: "Manage Services", path: "/admin/services" },
    { label: "Reports", path: "/admin/reports" }
  ];

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Admin" items={items} />
        <Card className="lg:col-span-3">
          <h1 className="mb-4 text-2xl font-semibold">Reports</h1>
          <p className="text-slate-600">Financial and operational reports can be exported from here.</p>
        </Card>
      </div>
    </div>
  );
}

export default Reports;
