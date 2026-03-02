import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { categories } from "../../utils/constants";

function AddService() {
  const items = [
    { label: "Dashboard", path: "/provider/dashboard" },
    { label: "Add Service", path: "/provider/add-service" },
    { label: "Manage Services", path: "/provider/services" },
    { label: "Bookings", path: "/provider/bookings" },
    { label: "Earnings", path: "/provider/earnings" }
  ];

  const formik = useFormik({
    initialValues: { title: "", description: "", category: "electrician", price: "", duration: "", location: "", image: "" },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      duration: Yup.string().required("Required"),
      location: Yup.string().required("Required")
    }),
    onSubmit: () => {
      toast.success("Service added");
    }
  });

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-4">
        <Sidebar title="Provider" items={items} />
        <Card className="lg:col-span-3">
          <h1 className="mb-5 text-2xl font-semibold">Add Service</h1>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={formik.handleSubmit}>
            <input name="title" placeholder="Service title" className="rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.title} />
            <select name="category" className="rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.category}>
              {categories.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
            <textarea name="description" placeholder="Description" className="rounded-xl border border-slate-200 px-4 py-2.5 md:col-span-2" onChange={formik.handleChange} value={formik.values.description} />
            <input name="price" placeholder="Price" className="rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.price} />
            <input name="duration" placeholder="Duration" className="rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.duration} />
            <input name="location" placeholder="Location" className="rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.location} />
            <input name="image" type="file" className="rounded-xl border border-slate-200 px-4 py-2.5" onChange={(e) => formik.setFieldValue("image", e.target.files?.[0]?.name || "")} />
            <Button className="md:col-span-2">Submit Service</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AddService;
