import { AnimatePresence, motion } from "framer-motion";

function Modal({ isOpen, title, children, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-lg rounded-xl2 bg-white p-6 shadow-soft"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button className="text-slate-500" onClick={onClose}>x</button>
            </div>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

export default Modal;
