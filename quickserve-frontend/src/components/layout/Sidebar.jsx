import { NavLink } from "react-router-dom";

function Sidebar({ title, items }) {
  return (
    <aside className="rounded-xl2 bg-white p-4 shadow-soft">
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div className="space-y-1">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm ${isActive ? "bg-blue-50 text-primary" : "text-slate-600 hover:bg-slate-100"}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
