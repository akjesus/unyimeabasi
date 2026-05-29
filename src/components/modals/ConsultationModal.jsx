import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    type: "Legal Consultation",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TEMP: replace with API later
    console.log("Consultation Request:", form);
    Swal.fire({
      icon: "success",
      title: "Request submitted successfully!",
      text: "we will respond to your message soonest",
      timer: 2000,
    });
    setForm({
      name: "",
      email: "",
      message: "",
      type: "Legal Consultation",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="
              relative
              w-[92%]
              max-w-lg
              bg-white
              rounded-2xl
              shadow-2xl
              p-6 sm:p-8
              z-10
            "
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Book a Consultation
              </h2>

              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X />
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  p-3
                  outline-none
                  focus:border-yellow-500
                "
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  p-3
                  outline-none
                  focus:border-yellow-500
                "
              />

              {/* TYPE */}
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  p-3
                  outline-none
                  focus:border-yellow-500
                "
              >
                <option>Legal Consultation</option>
                <option>Research Inquiry</option>
                <option>Policy Advisory</option>
              </select>

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Describe your request..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  p-3
                  outline-none
                  focus:border-yellow-500
                  resize-none
                "
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  w-full
                  bg-slate-900
                  text-white
                  py-3
                  rounded-xl
                  hover:bg-slate-800
                  transition
                  font-semibold
                "
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
