import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../../redux/authSlice";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { getDashboardPath } from "../../utils/helpers";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: { email: "", password: "", remember: false },
    validationSchema: Yup.object({
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async (values) => {
      const result = await dispatch(login(values));
      if (login.fulfilled.match(result)) {
        toast.success("Login success");
        navigate(getDashboardPath(result.payload.user.role));
      } else {
        toast.error(result.payload || "Login failed");
      }
    }
  });

  return (
    <div className="container-max py-14">
      <div className="mx-auto max-w-md rounded-xl2 bg-white p-6 shadow-soft">
        <h1 className="mb-6 text-2xl font-semibold">Login</h1>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <Input name="email" label="Email" type="email" onChange={formik.handleChange} value={formik.values.email} error={formik.touched.email && formik.errors.email} />
          <Input name="password" label="Password" type="password" onChange={formik.handleChange} value={formik.values.password} error={formik.touched.password && formik.errors.password} />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input name="remember" type="checkbox" onChange={formik.handleChange} checked={formik.values.remember} />
              Remember me
            </label>
            <a href="#" className="text-primary">Forgot password?</a>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>{loading ? "Please wait..." : "Login"}</Button>
          <Button type="button" variant="outline" className="w-full">Continue with Google</Button>

          <p className="text-center text-sm text-slate-600">
            New user? <Link to="/register" className="text-primary">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
