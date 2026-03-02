import { useSelector } from "react-redux";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";

function Profile() {
  const { user } = useSelector((state) => state.auth);
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
        <Card className="space-y-2 lg:col-span-3">
          <h1 className="text-2xl font-semibold">My Profile</h1>
          <p>Name: {user?.name || "Guest User"}</p>
          <p>Email: {user?.email || "example@mail.com"}</p>
          <p>Role: {user?.role || "customer"}</p>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
