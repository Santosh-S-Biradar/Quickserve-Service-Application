import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../../redux/authSlice";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", password: "", confirmPassword: "", role: "customer" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm your password")
    }),
    onSubmit: async (values) => {
      const result = await dispatch(register(values));
      if (register.fulfilled.match(result)) {
        toast.success("Registration successful");
        navigate("/login");
      } else {
        toast.error(result.payload || "Registration failed");
      }
    }
  });

  return (
    <div className="container-max py-14">
      <div className="mx-auto max-w-xl rounded-xl2 bg-white p-6 shadow-soft">
        <h1 className="mb-6 text-2xl font-semibold">Create Account</h1>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={formik.handleSubmit}>
          <Input label="Name" name="name" onChange={formik.handleChange} value={formik.values.name} error={formik.touched.name && formik.errors.name} />
          <Input label="Email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} error={formik.touched.email && formik.errors.email} />
          <Input label="Phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} error={formik.touched.phone && formik.errors.phone} />
          <div className="space-y-1">
            <label className="text-sm font-medium">Role</label>
            <select name="role" className="w-full rounded-xl border border-slate-200 px-4 py-2.5" onChange={formik.handleChange} value={formik.values.role}>
              <option value="customer">Customer</option>
              <option value="provider">Service Provider</option>
            </select>
          </div>
          <Input label="Password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} error={formik.touched.password && formik.errors.password} />
          <Input label="Confirm Password" name="confirmPassword" type="password" onChange={formik.handleChange} value={formik.values.confirmPassword} error={formik.touched.confirmPassword && formik.errors.confirmPassword} />
          <Button type="submit" className="md:col-span-2" disabled={loading}>{loading ? "Please wait..." : "Register"}</Button>
          <p className="text-center text-sm text-slate-600 md:col-span-2">Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
