import { motion } from "framer-motion";

function Button({ children, variant = "primary", className = "", ...props }) {
  const styles = {
    primary: "bg-primary text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
    outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
