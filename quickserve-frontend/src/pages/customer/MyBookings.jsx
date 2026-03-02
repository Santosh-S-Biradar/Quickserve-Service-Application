import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Sidebar from "../../components/layout/Sidebar";
import { cancelBooking } from "../../redux/bookingSlice";
import { statusColor } from "../../utils/helpers";

function MyBookings() {
  const items = [
    { label: "Dashboard", path: "/customer/dashboard" },
    { label: "My Bookings", path: "/customer/bookings" },
    { label: "Payments", path: "/customer/payments" },
    { label: "Profile", path: "/customer/profile" }
  ];

  const dispatch = useDispatch();
  const { items: bookings } = useSelector((state) => state.bookings);

  const tableData = useMemo(() => bookings.length ? bookings : [
    { id: "BK-101", service: "Plumbing", provider: "PipePro", date: "2026-03-05", status: "Pending" },
    { id: "BK-102", service: "Cleaning", provider: "Sparkle Team", date: "2026-03-08", status: "Accepted" },
    { id: "BK-103", service: "AC Repair", provider: "CoolFix", date: "2026-02-25", status: "Completed" }
  ], [bookings]);

  const onCancel = async (id) => {
    await dispatch(cancelBooking(id));
    toast.success("Booking cancelled");
  };

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Customer" items={items} />
        <div className="overflow-x-auto rounded-xl2 bg-white p-4 shadow-soft lg:col-span-3">
          <h1 className="mb-4 text-2xl font-semibold">My Bookings</h1>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-left text-slate-500">
                <th className="py-3">Booking ID</th><th>Service</th><th>Provider</th><th>Date</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="py-3">{row.id}</td>
                  <td>{row.service}</td>
                  <td>{row.provider}</td>
                  <td>{row.date}</td>
                  <td><span className={`rounded-full px-2.5 py-1 text-xs ${statusColor(row.status)}`}>{row.status}</span></td>
                  <td className="space-x-2">
                    <button className="text-rose-600" onClick={() => onCancel(row.id)}>Cancel</button>
                    <button className="text-primary">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
