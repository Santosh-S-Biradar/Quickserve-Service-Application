function Input({ label, error, className = "", ...props }) {
  return (
    <div className="space-y-1">
      {label ? <label className="text-sm font-medium text-slate-700">{label}</label> : null}
      <input
        className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none ${className}`}
        {...props}
      />
      {error ? <p className="text-xs text-rose-600">{error}</p> : null}
    </div>
  );
}

export default Input;
