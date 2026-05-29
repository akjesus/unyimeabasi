import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 text-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            Researcher • Lawyer • Policy Advocate
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Dr. Jane Doe
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Canadian legal scholar specializing in international law, public
            policy, and socio-legal research.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">
              View Research
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              Contact
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src="/lawyer.jpg"
            alt="Researcher and Lawyer"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
