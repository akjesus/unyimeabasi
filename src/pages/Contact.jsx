import useDocumentTitle from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  useDocumentTitle("Contact | UnyimeAbasi");
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
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4"
          >
            Get in Touch
          </motion.h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Please provide details of how you would like to collaborate with me
            and how I might reach out to you
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                rows="5"
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

          {/* INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-yellow-600" />
                <h3 className="font-semibold text-slate-900">Email</h3>
              </div>
              <p className="text-gray-600">contact@legalresearch.ca</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-yellow-600" />
                <h3 className="font-semibold text-slate-900">Phone</h3>
              </div>
              <p className="text-gray-600">+1 (000) 000-0000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-yellow-600" />
                <h3 className="font-semibold text-slate-900">Location</h3>
              </div>
              <p className="text-gray-600">
                Toronto, Canada (Remote consultations available)
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-yellow-600" />
                <h3 className="font-semibold text-slate-900">Working Hours</h3>
              </div>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="bg-slate-100 rounded-2xl h-48 flex items-center justify-center text-gray-500">
              Map / Office Location
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
