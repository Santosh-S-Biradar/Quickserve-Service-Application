import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import { getDashboardPath } from "../../utils/helpers";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guestLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Become a Provider", to: "/register" },
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" }
  ];

  const userLinks = [
    { label: "Dashboard", to: getDashboardPath(user?.role) },
    { label: "Bookings", to: user?.role === "customer" ? "/customer/bookings" : "/provider/bookings" },
    { label: "Profile", to: "/customer/profile" }
  ];

  const links = token ? userLinks : guestLinks;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const navClass = ({ isActive }) => isActive ? "text-primary font-semibold" : "text-slate-700 hover:text-primary";

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-max flex h-16 items-center justify-between py-4">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-slate-900">
          Quick<span className="text-primary">Serve</span>
        </Link>

        <div className="hidden items-center gap-5 text-sm md:flex">
          {links.map((link) => <NavLink key={link.label} to={link.to} className={navClass}>{link.label}</NavLink>)}
          {token ? <button onClick={handleLogout} className="text-slate-700 hover:text-primary">Logout</button> : null}
        </div>

        <button className="text-xl md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)} className="block py-2 text-slate-700">
              {link.label}
            </NavLink>
          ))}
          {token ? <button onClick={handleLogout} className="py-2 text-slate-700">Logout</button> : null}
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
