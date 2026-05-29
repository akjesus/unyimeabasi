import { motion } from "framer-motion";
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Swal from "sweetalert2"

export default function Contact() {
  useDocumentTitle("About | UnyimeAbasi");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", form);
    Swal.fire({
      icon:"success",
      title: "Message Sent Successfully!",
      text: "We will get back to you soonest!",
      timer: 2000,
    });
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-24 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            Got questions or want to connect with me?
          </motion.h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Please provide details of how you would like to collaborate with me
            and how I might reach out to you
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              bg-white
              border border-gray-200
              rounded-2xl
              p-6 sm:p-8
              shadow-sm
            "
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:border-yellow-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:border-yellow-500 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 focus:border-yellow-500 outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 focus:border-yellow-500 outline-none resize-none"
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-slate-900
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-slate-800
                  transition
                "
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* MAP ONLY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              bg-slate-100
              rounded-2xl
              h-72
              flex items-center justify-center
              text-gray-500
              border border-gray-200
            "
          >
            Map / Office Location (Toronto, Canada)
          </motion.div>
        </div>
      </section>
    </div>
  );
}
