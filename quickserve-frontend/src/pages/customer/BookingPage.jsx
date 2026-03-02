import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { createBooking } from "../../redux/bookingSlice";

function BookingPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { date: "", time: "", address: "", paymentMethod: "card" },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      address: Yup.string().required("Address is required")
    }),
    onSubmit: async (values) => {
      const payload = { serviceId: id, ...values };
      const result = await dispatch(createBooking(payload));
      if (createBooking.fulfilled.match(result)) {
        toast.success("Booking success");
      } else {
        toast.error(result.payload || "Booking failed");
      }
    }
  });

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h1 className="mb-6 text-2xl font-semibold">Book Service</h1>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <input name="date" type="date" className="w-full rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.date} />
            <input name="time" type="time" className="w-full rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.time} />
            <input name="address" placeholder="Address" className="w-full rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.address} />
            <select name="paymentMethod" className="w-full rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.paymentMethod}>
              <option value="card">Card</option><option value="cash">Cash</option><option value="upi">UPI</option>
            </select>
            <Button type="submit" className="w-full">Confirm Booking</Button>
          </form>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-3 text-sm text-slate-600">Service: Premium Home Service</p>
          <p className="text-sm text-slate-600">Price: Set by provider at confirmation</p>
          <p className="text-sm text-slate-600">Provider: Verified Pro</p>
        </Card>
      </div>
    </div>
  );
}

export default BookingPage;
